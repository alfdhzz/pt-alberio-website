import React, { useState } from 'react';
import { Calculator as CalcIcon, DollarSign, TrendingUp, Package, Activity, Info, FileText, FileSpreadsheet } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';export default function Calculator() {
  const [activeTab, setActiveTab] = useState('hpp');

  const [hppData, setHppData] = useState({
    productName: '',
    productionUnit: 0,
    rawMaterialMain: 0,
    rawMaterialSub: 0,
    packaging: 0,
    laborCost: 0,
    laborBonus: 0,
    overheadElectricity: 0,
    overheadOther: 0,
    targetMargin: 0,
  });

  const [bepData, setBepData] = useState({
    hargaJual: 0,
    biayaVariabel: 0,
    biayaTetap: 0,
    targetHarian: 0,
  });

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  const formatInput = (num) => {
    if (num === 0 || num === null || num === undefined || isNaN(num)) return '';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const parseInput = (str) => {
    if (!str) return 0;
    const cleanStr = str.toString().replace(/\D/g, '');
    return parseInt(cleanStr, 10) || 0;
  };

  const handleHppChange = (e) => {
    const { name, value } = e.target;
    if (name === 'productName') {
      setHppData(prev => ({ ...prev, [name]: value }));
    } else if (name === 'targetMargin') {
      setHppData(prev => ({ ...prev, [name]: Number(value) || 0 }));
    } else {
      setHppData(prev => ({ ...prev, [name]: parseInput(value) }));
    }
  };

  const handleBepChange = (e) => {
    const { name, value } = e.target;
    setBepData(prev => ({ ...prev, [name]: parseInput(value) }));
  };

  const [hppResult, setHppResult] = useState(null);
  const [bepResult, setBepResult] = useState(null);

  const handleCalculateHpp = () => {
    const totalBahanBaku = hppData.rawMaterialMain + hppData.rawMaterialSub + hppData.packaging;
    const totalTenagaKerja = hppData.laborCost + hppData.laborBonus;
    const totalOverhead = hppData.overheadElectricity + hppData.overheadOther;
    const totalBiayaHpp = totalBahanBaku + totalTenagaKerja + totalOverhead;
    const hppPerUnit = hppData.productionUnit > 0 ? totalBiayaHpp / hppData.productionUnit : 0;
    
    setHppResult({
      totalBiayaHpp,
      hppPerUnit,
    });
  };

  const handleCalculateBep = () => {
    const marginPerUnit = bepData.hargaJual - bepData.biayaVariabel;
    const bepUnit = marginPerUnit > 0 ? Math.ceil(bepData.biayaTetap / marginPerUnit) : 0;
    const bepRupiah = bepUnit * bepData.hargaJual;

    setBepResult({
      bepUnit,
      bepRupiah
    });
  };

  const hargaRekomendasi = hppResult ? hppResult.hppPerUnit * (1 + (hppData.targetMargin / 100)) : 0;

  const exportHppToPdf = () => {
    if (!hppResult) return;
    const doc = new jsPDF();
    
    doc.text("Laporan HPP (Harga Pokok Penjualan)", 14, 15);
    doc.text(`Produk: ${hppData.productName || 'Spandek'}`, 14, 25);
    
    const tableData = [
      ["Jumlah Unit Produksi", formatInput(hppData.productionUnit)],
      ["Bahan Baku Utama", formatRupiah(hppData.rawMaterialMain)],
      ["Bahan Pendukung", formatRupiah(hppData.rawMaterialSub)],
      ["Kemasan", formatRupiah(hppData.packaging)],
      ["Upah Produksi", formatRupiah(hppData.laborCost)],
      ["Bonus/Insentif", formatRupiah(hppData.laborBonus)],
      ["Listrik & Utilitas", formatRupiah(hppData.overheadElectricity)],
      ["Biaya Lainnya", formatRupiah(hppData.overheadOther)],
      ["Total Biaya HPP", formatRupiah(hppResult.totalBiayaHpp)],
      ["HPP per Unit", formatRupiah(hppResult.hppPerUnit)],
      ["Target Margin", `${hppData.targetMargin}%`],
      ["Harga Rekomendasi", formatRupiah(hargaRekomendasi)],
    ];
    
    autoTable(doc, {
      startY: 30,
      head: [["Deskripsi", "Nilai"]],
      body: tableData,
    });
    
    doc.save("Laporan_HPP.pdf");
  };

  const exportHppToExcel = () => {
    if (!hppResult) return;
    const data = [
      { Deskripsi: "Produk", Nilai: hppData.productName || 'Spandek' },
      { Deskripsi: "Jumlah Unit Produksi", Nilai: hppData.productionUnit },
      { Deskripsi: "Bahan Baku Utama", Nilai: hppData.rawMaterialMain },
      { Deskripsi: "Bahan Pendukung", Nilai: hppData.rawMaterialSub },
      { Deskripsi: "Kemasan", Nilai: hppData.packaging },
      { Deskripsi: "Upah Produksi", Nilai: hppData.laborCost },
      { Deskripsi: "Bonus/Insentif", Nilai: hppData.laborBonus },
      { Deskripsi: "Listrik & Utilitas", Nilai: hppData.overheadElectricity },
      { Deskripsi: "Biaya Lainnya", Nilai: hppData.overheadOther },
      { Deskripsi: "Total Biaya HPP", Nilai: hppResult.totalBiayaHpp },
      { Deskripsi: "HPP per Unit", Nilai: hppResult.hppPerUnit },
      { Deskripsi: "Target Margin (%)", Nilai: hppData.targetMargin },
      { Deskripsi: "Harga Rekomendasi", Nilai: hargaRekomendasi },
    ];
    
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Laporan HPP");
    XLSX.writeFile(wb, "Laporan_HPP.xlsx");
  };

  const exportBepToPdf = () => {
    if (!bepResult) return;
    const doc = new jsPDF();
    
    doc.text("Laporan BEP (Titik Impas)", 14, 15);
    
    const tableData = [
      ["Harga Jual Per Unit", formatRupiah(bepData.hargaJual)],
      ["Biaya Variabel Per Unit", formatRupiah(bepData.biayaVariabel)],
      ["Biaya Tetap Per Periode", formatRupiah(bepData.biayaTetap)],
      ["Target Harian", formatInput(bepData.targetHarian)],
      ["BEP (Unit)", `${bepResult.bepUnit.toLocaleString('id-ID')} Unit`],
      ["BEP (Rupiah)", formatRupiah(bepResult.bepRupiah)],
    ];
    
    autoTable(doc, {
      startY: 25,
      head: [["Deskripsi", "Nilai"]],
      body: tableData,
    });
    
    doc.save("Laporan_BEP.pdf");
  };

  const exportBepToExcel = () => {
    if (!bepResult) return;
    const data = [
      { Deskripsi: "Harga Jual Per Unit", Nilai: bepData.hargaJual },
      { Deskripsi: "Biaya Variabel Per Unit", Nilai: bepData.biayaVariabel },
      { Deskripsi: "Biaya Tetap Per Periode", Nilai: bepData.biayaTetap },
      { Deskripsi: "Target Harian", Nilai: bepData.targetHarian },
      { Deskripsi: "BEP (Unit)", Nilai: bepResult.bepUnit },
      { Deskripsi: "BEP (Rupiah)", Nilai: bepResult.bepRupiah },
    ];
    
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Laporan BEP");
    XLSX.writeFile(wb, "Laporan_BEP.xlsx");
  };

  return (
    <section id="calculator" className="py-24 bg-bg-secondary relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#c0000c]/5 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#c0000c]/5 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CalcIcon className="text-[#c0000c]" size={28} />
            <span className="text-[#c0000c] font-bold tracking-wider uppercase text-sm">Alat Analisis Bisnis</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-6">
            Kalkulator <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c0000c] to-[#ff4444]">Bisnis & ROI</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Hitung Harga Pokok Penjualan (HPP) dan Break Even Point (BEP) untuk merencanakan keuangan produksi mesin Anda.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('hpp')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'hpp' 
                ? 'bg-[#c0000c] text-white shadow-lg shadow-[#c0000c]/30 scale-105' 
                : 'bg-bg-primary text-text-secondary hover:text-text-primary hover:bg-border-color border border-border-color'
            }`}
          >
            <Package size={20} />
            Hitung HPP & Margin
          </button>
          <button
            onClick={() => setActiveTab('bep')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              activeTab === 'bep' 
                ? 'bg-[#c0000c] text-white shadow-lg shadow-[#c0000c]/30 scale-105' 
                : 'bg-bg-primary text-text-secondary hover:text-text-primary hover:bg-border-color border border-border-color'
            }`}
          >
            <Activity size={20} />
            Hitung BEP (Titik Impas)
          </button>
        </div>

        {/* Calculator Content */}
        <div className="bg-bg-primary border border-border-color rounded-3xl p-6 md:p-8 shadow-2xl">
          
          {activeTab === 'hpp' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Inputs */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-bg-primary p-5 rounded-2xl border border-border-color">
                    <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#c0000c]/10 text-[#c0000c] flex items-center justify-center text-xs">1</div>
                      Identitas Produk
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary mb-1">Jumlah Unit Produksi</label>
                        <input type="text" name="productionUnit" value={formatInput(hppData.productionUnit)} onChange={handleHppChange} placeholder="Contoh: 100" className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-2.5 text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-bg-primary p-5 rounded-2xl border border-border-color">
                    <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#c0000c]/10 text-[#c0000c] flex items-center justify-center text-xs">2</div>
                      Bahan Baku Langsung
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary mb-1">Bahan Baku Utama</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-medium">Rp</span>
                          <input type="text" name="rawMaterialMain" value={formatInput(hppData.rawMaterialMain)} onChange={handleHppChange} placeholder="Contoh: 50.000" className="w-full bg-bg-secondary border border-border-color rounded-lg pl-10 pr-4 py-2.5 text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary mb-1">Bahan Pendukung</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-medium">Rp</span>
                          <input type="text" name="rawMaterialSub" value={formatInput(hppData.rawMaterialSub)} onChange={handleHppChange} placeholder="Contoh: 30.000" className="w-full bg-bg-secondary border border-border-color rounded-lg pl-10 pr-4 py-2.5 text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary mb-1">Kemasan</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-medium">Rp</span>
                          <input type="text" name="packaging" value={formatInput(hppData.packaging)} onChange={handleHppChange} placeholder="Contoh: 40.000" className="w-full bg-bg-secondary border border-border-color rounded-lg pl-10 pr-4 py-2.5 text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-bg-primary p-5 rounded-2xl border border-border-color">
                    <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#c0000c]/10 text-[#c0000c] flex items-center justify-center text-xs">3</div>
                      Tenaga Kerja Langsung
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary mb-1">Upah Produksi</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-medium">Rp</span>
                          <input type="text" name="laborCost" value={formatInput(hppData.laborCost)} onChange={handleHppChange} placeholder="Contoh: 20.000" className="w-full bg-bg-secondary border border-border-color rounded-lg pl-10 pr-4 py-2.5 text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary mb-1">Bonus/Insentif</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-medium">Rp</span>
                          <input type="text" name="laborBonus" value={formatInput(hppData.laborBonus)} onChange={handleHppChange} placeholder="Contoh: 20.000" className="w-full bg-bg-secondary border border-border-color rounded-lg pl-10 pr-4 py-2.5 text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-bg-primary p-5 rounded-2xl border border-border-color">
                    <h3 className="font-bold text-text-primary mb-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#c0000c]/10 text-[#c0000c] flex items-center justify-center text-xs">4</div>
                      Biaya Overhead
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary mb-1">Listrik & Utilitas</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-medium">Rp</span>
                          <input type="text" name="overheadElectricity" value={formatInput(hppData.overheadElectricity)} onChange={handleHppChange} placeholder="Contoh: 40.000" className="w-full bg-bg-secondary border border-border-color rounded-lg pl-10 pr-4 py-2.5 text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-text-secondary mb-1">Biaya Lainnya</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-medium">Rp</span>
                          <input type="text" name="overheadOther" value={formatInput(hppData.overheadOther)} onChange={handleHppChange} placeholder="Contoh: 60.000" className="w-full bg-bg-secondary border border-border-color rounded-lg pl-10 pr-4 py-2.5 text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 mt-4">
                  <button onClick={handleCalculateHpp} className="w-full bg-[#c0000c] text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-[#c0000c]/30 text-lg flex justify-center items-center gap-2 cursor-pointer">
                    <CalcIcon size={24} /> Hitung HPP Sekarang
                  </button>
                </div>
              </div>

              {/* HPP Result */}
              <div className="bg-gradient-to-br from-[#c0000c]/5 to-transparent border border-[#c0000c]/20 p-6 md:p-8 rounded-3xl flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <DollarSign className="text-[#c0000c]" />
                    Hasil Perhitungan HPP
                  </h3>
                  
                  {hppResult ? (
                    <>
                      <div className="space-y-4 mb-8 animate-fade-in">
                        <div className="flex justify-between items-center pb-4 border-b border-border-color">
                          <span className="text-text-secondary">Total Biaya</span>
                          <span className="font-bold text-text-primary">{formatRupiah(hppResult.totalBiayaHpp)}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border-color">
                          <span className="text-text-secondary">HPP per Unit</span>
                          <span className="text-xl font-black text-[#c0000c]">{formatRupiah(hppResult.hppPerUnit)}</span>
                        </div>
                      </div>

                      <div className="mt-8 animate-fade-in">
                        <h4 className="font-bold text-text-primary mb-4">Rekomendasi Harga Jual</h4>
                        <div className="mb-6">
                          <label className="flex justify-between text-sm font-semibold text-text-secondary mb-2">
                            <span>Target Margin Keuntungan</span>
                            <span className="text-[#c0000c]">{hppData.targetMargin}%</span>
                          </label>
                          <input 
                            type="range" 
                            name="targetMargin" 
                            min="0" 
                            max="100" 
                            value={hppData.targetMargin} 
                            onChange={handleHppChange}
                            className="w-full h-2 bg-border-color rounded-lg appearance-none cursor-pointer accent-[#c0000c]"
                          />
                        </div>
                        <div className="flex justify-between items-center bg-bg-primary p-4 rounded-xl border border-[#c0000c]/30">
                          <span className="text-sm font-semibold text-text-secondary">Harga Rekomendasi</span>
                          <span className="text-2xl font-black text-[#c0000c]">{formatRupiah(hargaRekomendasi)}</span>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3 animate-fade-in">
                        <button onClick={exportHppToPdf} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors shadow-lg shadow-red-600/20">
                          <FileText size={18} /> Export PDF
                        </button>
                        <button onClick={exportHppToExcel} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors shadow-lg shadow-green-600/20">
                          <FileSpreadsheet size={18} /> Export Excel
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center py-12 opacity-50">
                      <Package size={48} className="mb-4 text-text-secondary" />
                      <p className="text-text-secondary font-medium">Isi data pada form lalu klik tombol "Hitung HPP Sekarang" untuk melihat hasil.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'bep' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* BEP Inputs */}
              <div className="space-y-6">
                <div className="bg-bg-primary p-6 rounded-2xl border border-border-color">
                  <h3 className="font-bold text-text-primary mb-6">Input Data Penjualan & Biaya</h3>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-1">
                        Harga Jual Per Unit <span className="text-[#c0000c]">*</span>
                      </label>
                      <p className="text-xs text-text-secondary mb-2">Harga jual per produk ke pembeli.</p>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-medium">Rp</span>
                        <input type="text" name="hargaJual" value={formatInput(bepData.hargaJual)} onChange={handleBepChange} placeholder="Contoh: 15.000" className="w-full bg-bg-secondary border border-border-color rounded-lg pl-10 pr-4 py-3 text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors font-medium" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-1">
                        Biaya Variabel Per Unit <span className="text-[#c0000c]">*</span>
                      </label>
                      <p className="text-xs text-text-secondary mb-2">Biaya yang ikut naik tiap 1 produk terjual (Misal: HPP + Kemasan).</p>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-medium">Rp</span>
                        <input type="text" name="biayaVariabel" value={formatInput(bepData.biayaVariabel)} onChange={handleBepChange} placeholder="Contoh: 10.000" className="w-full bg-bg-secondary border border-border-color rounded-lg pl-10 pr-4 py-3 text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors font-medium" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-1">
                        Biaya Tetap Per Periode <span className="text-[#c0000c]">*</span>
                      </label>
                      <p className="text-xs text-text-secondary mb-2">Biaya pasti per bulan (Misal: Gaji, Sewa Tempat).</p>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary font-medium">Rp</span>
                        <input type="text" name="biayaTetap" value={formatInput(bepData.biayaTetap)} onChange={handleBepChange} placeholder="Contoh: 2.000.000" className="w-full bg-bg-secondary border border-border-color rounded-lg pl-10 pr-4 py-3 text-text-primary focus:outline-none focus:border-[#c0000c] transition-colors font-medium" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button onClick={handleCalculateBep} className="w-full bg-[#c0000c] text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-[#c0000c]/30 text-lg flex justify-center items-center gap-2 cursor-pointer">
                    <CalcIcon size={24} /> Hitung Titik Impas Sekarang
                  </button>
                </div>
              </div>

              {/* BEP Results */}
              <div className="bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-[#c0000c]/5 border border-border-color p-6 md:p-8 rounded-3xl flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="text-[#c0000c]" size={28} />
                  <h3 className="text-2xl font-bold text-text-primary">Hasil Titik Impas</h3>
                </div>

                {bepResult ? (
                  <div className="grid grid-cols-1 gap-6 animate-fade-in">
                    <div className="bg-bg-primary p-6 rounded-2xl border border-border-color shadow-sm relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#c0000c]"></div>
                      <p className="text-text-secondary text-sm font-medium mb-1">Anda akan balik modal (BEP) jika berhasil menjual:</p>
                      <div className="flex items-end gap-2 mt-2">
                        <span className="text-4xl font-black text-text-primary">{bepResult.bepUnit.toLocaleString('id-ID')}</span>
                        <span className="text-lg font-bold text-text-secondary mb-1">Unit</span>
                      </div>
                    </div>

                    <div className="bg-bg-primary p-6 rounded-2xl border border-border-color shadow-sm relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                      <p className="text-text-secondary text-sm font-medium mb-1">Atau setara dengan nilai omzet:</p>
                      <div className="mt-2">
                        <span className="text-3xl font-black text-green-500">{formatRupiah(bepResult.bepRupiah)}</span>
                      </div>
                    </div>

                    <div className="bg-[#c0000c]/10 border border-[#c0000c]/20 p-5 rounded-xl flex items-start gap-3 mt-4">
                      <Info className="text-[#c0000c] shrink-0 mt-0.5" size={20} />
                      <p className="text-sm text-text-primary leading-relaxed">
                        Penjualan di atas <strong className="text-[#c0000c]">{bepResult.bepUnit} unit</strong> adalah <strong>Keuntungan Bersih</strong> Anda. Jika penjualan di bawah target tersebut, bisnis Anda mengalami kerugian.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6 animate-fade-in">
                      <button onClick={exportBepToPdf} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors shadow-lg shadow-red-600/20">
                        <FileText size={18} /> Export PDF
                      </button>
                      <button onClick={exportBepToExcel} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 font-semibold transition-colors shadow-lg shadow-green-600/20">
                        <FileSpreadsheet size={18} /> Export Excel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12 opacity-50">
                    <Activity size={48} className="mb-4 text-text-secondary" />
                    <p className="text-text-secondary font-medium">Isi data pada form lalu klik tombol "Hitung Titik Impas Sekarang" untuk melihat hasil.</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </section>
  );
}
