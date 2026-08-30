import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Activity, 
  RefreshCw, 
  Sliders, 
  Calendar, 
  Info, 
  ArrowUpRight, 
  Download,
  CheckCircle2,
  Lock,
  PieChart as PieIcon,
  LineChart as LineIcon
} from 'lucide-react';
import { ALLOCATION_PRESETS, DEMO_TRANSACTIONS, COMPANY_CONFIG } from '../data/content';
import { AllocationPreset } from '../types';

interface DashboardShowcaseProps {
  onOpenGetStarted: () => void;
}

export const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({ onOpenGetStarted }) => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('balanced');
  const [timeframe, setTimeframe] = useState<'1M' | '3M' | '6M' | '1Y'>('6M');
  const [hoveredDataPoint, setHoveredDataPoint] = useState<{ date: string; value: string } | null>(null);

  const activePreset: AllocationPreset = ALLOCATION_PRESETS.find(p => p.id === selectedPresetId) || ALLOCATION_PRESETS[1];

  // SVG Line Chart sample coordinate generator based on timeframe and preset
  const getChartPoints = () => {
    switch (selectedPresetId) {
      case 'conservative':
        return [
          { x: 0, y: 160, date: 'Mar 2026', value: '$100,000' },
          { x: 100, y: 155, date: 'Apr 2026', value: '$101,200' },
          { x: 200, y: 150, date: 'May 2026', value: '$102,450' },
          { x: 300, y: 146, date: 'Jun 2026', value: '$103,800' },
          { x: 400, y: 142, date: 'Jul 2026', value: '$104,900' },
          { x: 500, y: 138, date: 'Aug 2026', value: '$106,120' }
        ];
      case 'dynamic-growth':
        return [
          { x: 0, y: 180, date: 'Mar 2026', value: '$100,000' },
          { x: 100, y: 130, date: 'Apr 2026', value: '$112,400' },
          { x: 200, y: 160, date: 'May 2026', value: '$104,800' },
          { x: 300, y: 110, date: 'Jun 2026', value: '$118,500' },
          { x: 400, y: 90, date: 'Jul 2026', value: '$124,200' },
          { x: 500, y: 70, date: 'Aug 2026', value: '$129,400' }
        ];
      default: // balanced
        return [
          { x: 0, y: 170, date: 'Mar 2026', value: '$100,000' },
          { x: 100, y: 148, date: 'Apr 2026', value: '$105,300' },
          { x: 200, y: 155, date: 'May 2026', value: '$103,900' },
          { x: 300, y: 135, date: 'Jun 2026', value: '$109,400' },
          { x: 400, y: 120, date: 'Jul 2026', value: '$113,800' },
          { x: 500, y: 105, date: 'Aug 2026', value: '$117,250' }
        ];
    }
  };

  const chartPoints = getChartPoints();
  const pathD = `M ${chartPoints.map(p => `${p.x},${p.y}`).join(' L ')}`;
  const fillD = `M ${chartPoints[0].x},220 L ${chartPoints.map(p => `${p.x},${p.y}`).join(' L ')} L ${chartPoints[chartPoints.length - 1].x},220 Z`;

  return (
    <section 
      id="showcase"
      className="py-20 sm:py-28 bg-[#071A2F] text-white border-t border-[#E3E8EF]/10 relative overflow-hidden"
      aria-label="Interactive Product Console Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider">
            Product Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Fortiva Client Portal
          </h2>
          <p className="text-base sm:text-lg text-[#EAF3FF]/80 leading-relaxed">
            Experience complete transparency with real-time portfolio telemetry, automated drift tracking, and downloadable fiduciary statements.
          </p>
        </div>

        {/* Preset Selector Pill Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {ALLOCATION_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              id={`preset-btn-${preset.id}`}
              onClick={() => setSelectedPresetId(preset.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all border flex items-center gap-2 ${
                selectedPresetId === preset.id
                  ? 'bg-[#1769D2] border-[#1769D2] text-white shadow-lg'
                  : 'bg-black/30 border-white/10 text-[#EAF3FF]/70 hover:text-white hover:border-white/20'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{preset.name}</span>
              <span className="text-[10px] opacity-75 hidden sm:inline">({preset.riskTier})</span>
            </button>
          ))}
        </div>

        {/* Full Interactive Product Mockup Container */}
        <div 
          id="product-dashboard-mockup"
          className="bg-[#0B243F] border border-white/15 rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Mockup Top Navigation Bar */}
          <div className="bg-[#071A2F]/90 px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
              </div>
              <span className="text-xs text-[#64748B] pl-2 border-l border-white/10 font-mono">
                portal.fortivacapital.com/console/mandate-{activePreset.id}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-black/40 border border-white/10 text-[#10B981]">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>Custody Active & Synced</span>
              </div>
              <button
                type="button"
                onClick={onOpenGetStarted}
                className="bg-[#1769D2] hover:bg-[#155bb6] text-white px-3 py-1 rounded font-semibold transition-colors"
              >
                Access Live Demo
              </button>
            </div>
          </div>

          {/* Main Dashboard Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-black/25 p-4 rounded-xl border border-white/5 space-y-1">
                <div className="text-xs text-[#64748B] font-semibold uppercase">Strategy Mandate</div>
                <div className="text-base font-bold text-white truncate">{activePreset.name}</div>
                <div className="text-[11px] text-[#38BDF8]">{activePreset.tag}</div>
              </div>

              <div className="bg-black/25 p-4 rounded-xl border border-white/5 space-y-1">
                <div className="text-xs text-[#64748B] font-semibold uppercase">Diversification Score</div>
                <div className="text-base font-bold text-white">{activePreset.metrics.diversificationScore}</div>
                <div className="text-[11px] text-[#10B981]">Institutional Threshold Pass</div>
              </div>

              <div className="bg-black/25 p-4 rounded-xl border border-white/5 space-y-1">
                <div className="text-xs text-[#64748B] font-semibold uppercase">Rebalance Schedule</div>
                <div className="text-base font-bold text-white">{activePreset.rebalanceFrequency}</div>
                <div className="text-[11px] text-[#64748B]">Automated Drift Control</div>
              </div>

              <div className="bg-black/25 p-4 rounded-xl border border-white/5 space-y-1">
                <div className="text-xs text-[#64748B] font-semibold uppercase">Custodial Framework</div>
                <div className="text-base font-bold text-white truncate">{activePreset.metrics.custodyType}</div>
                <div className="text-[11px] text-[#10B981]">100% Cold Hardware Vault</div>
              </div>
            </div>

            {/* Middle Section: Interactive Chart & Allocation Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Chart Panel (7 Cols) */}
              <div className="lg:col-span-7 bg-black/20 p-5 rounded-xl border border-white/5 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <div className="text-xs text-[#64748B] uppercase font-semibold">Simulated Index Progression</div>
                    <div className="text-sm font-bold text-white">Sample Allocation Evolution</div>
                  </div>

                  {/* Timeframe selector */}
                  <div className="flex items-center bg-black/40 p-1 rounded-lg text-xs">
                    {(['1M', '3M', '6M', '1Y'] as const).map((tf) => (
                      <button
                        key={tf}
                        type="button"
                        onClick={() => setTimeframe(tf)}
                        className={`px-2.5 py-1 rounded transition-colors ${
                          timeframe === tf ? 'bg-[#1769D2] text-white font-semibold' : 'text-[#64748B] hover:text-white'
                        }`}
                      >
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SVG Area Chart */}
                <div className="relative pt-4 pb-2">
                  <svg 
                    viewBox="0 0 500 230" 
                    className="w-full h-48 sm:h-56 overflow-visible"
                    aria-label="Illustrative Portfolio Trajectory Graph"
                  >
                    <defs>
                      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1769D2" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#1769D2" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Grid lines */}
                    <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="100" x2="500" y2="100" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="150" x2="500" y2="150" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="200" x2="500" y2="200" stroke="rgba(255,255,255,0.06)" />

                    {/* Area fill */}
                    <path d={fillD} fill="url(#chartGrad)" />

                    {/* Line Stroke */}
                    <path 
                      d={pathD} 
                      fill="none" 
                      stroke="#38BDF8" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                    />

                    {/* Data Points */}
                    {chartPoints.map((pt, idx) => (
                      <g key={idx} className="cursor-pointer">
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="4"
                          fill="#071A2F"
                          stroke="#38BDF8"
                          strokeWidth="2"
                          onMouseEnter={() => setHoveredDataPoint({ date: pt.date, value: pt.value })}
                          onMouseLeave={() => setHoveredDataPoint(null)}
                        />
                      </g>
                    ))}
                  </svg>

                  {/* Tooltip display */}
                  <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-2 px-1 border-t border-white/5">
                    <span>{chartPoints[0].date}</span>
                    <span className="text-[#38BDF8] font-medium">
                      {hoveredDataPoint ? `${hoveredDataPoint.date}: ${hoveredDataPoint.value} (Sample)` : 'Hover points for sample progression'}
                    </span>
                    <span>{chartPoints[chartPoints.length - 1].date}</span>
                  </div>
                </div>
              </div>

              {/* Asset Allocation Stack (5 Cols) */}
              <div className="lg:col-span-5 bg-black/20 p-5 rounded-xl border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs text-[#64748B] uppercase font-semibold">Asset Weights</div>
                  <span className="text-xs text-[#10B981] font-semibold">100% Accounted</span>
                </div>

                {/* Progress bar visual */}
                <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden flex">
                  {activePreset.allocations.map((alloc, idx) => (
                    <div
                      key={idx}
                      style={{ width: `${alloc.percentage}%`, backgroundColor: alloc.color }}
                      title={`${alloc.name}: ${alloc.percentage}%`}
                    />
                  ))}
                </div>

                {/* Asset list */}
                <div className="space-y-2 pt-1 text-xs">
                  {activePreset.allocations.map((alloc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded bg-black/30 border border-white/5">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: alloc.color }} />
                        <div>
                          <div className="font-semibold text-white">{alloc.name}</div>
                          <div className="text-[10px] text-[#64748B]">{alloc.category} • {alloc.symbol}</div>
                        </div>
                      </div>
                      <span className="font-bold text-white">{alloc.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Section: Recent Automated Transactions & Audit Logs */}
            <div className="bg-black/20 p-5 rounded-xl border border-white/5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#64748B] uppercase font-semibold">Ledger Transparency</div>
                  <div className="text-sm font-bold text-white">Recent Account & Rebalancing Actions</div>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#38BDF8]">
                  <Download className="w-3.5 h-3.5" />
                  <span className="cursor-pointer hover:underline">Export Fiduciary Audit (CSV/PDF)</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs" aria-label="Sample Ledger Activity Table">
                  <thead>
                    <tr className="text-[#64748B] border-b border-white/10 uppercase text-[10px] tracking-wider">
                      <th className="pb-2.5 font-semibold">Transaction ID</th>
                      <th className="pb-2.5 font-semibold">Date / Timestamp</th>
                      <th className="pb-2.5 font-semibold">Action Type</th>
                      <th className="pb-2.5 font-semibold">Asset / Description</th>
                      <th className="pb-2.5 font-semibold">Parameters</th>
                      <th className="pb-2.5 font-semibold text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-white/90">
                    {DEMO_TRANSACTIONS.map((tx) => (
                      <tr key={tx.id} className="hover:bg-white/5">
                        <td className="py-2.5 font-mono text-[#38BDF8]">{tx.id}</td>
                        <td className="py-2.5 text-[#64748B]">{tx.date}</td>
                        <td className="py-2.5 font-medium">{tx.type}</td>
                        <td className="py-2.5">{tx.asset}</td>
                        <td className="py-2.5 text-[#EAF3FF]/80">{tx.amount}</td>
                        <td className="py-2.5 text-right">
                          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#10B981]/20 text-[#10B981]">
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Bottom Banner with Illustrative Disclaimer */}
          <div className="bg-[#071A2F] px-6 py-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#64748B]">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#38BDF8] shrink-0" />
              <span>{COMPANY_CONFIG.demoDisclaimer}</span>
            </div>
            <button
              type="button"
              onClick={onOpenGetStarted}
              className="text-[#38BDF8] hover:text-white font-semibold flex items-center gap-1 self-end sm:self-auto"
            >
              <span>Explore Live Configuration</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
