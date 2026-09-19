import React, { useState, useEffect } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import {
  Activity, BatteryCharging, Sun, Zap, TrendingUp,
  ShieldCheck, Thermometer, Clock, AlertTriangle, CheckCircle2,
  Gauge, Leaf, Power
} from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import './Dashboard.css';

/* ===== MOCK DATA ===== */
const batteryTimeline = [
  { time: '06:00', soc: 100, voltage: 8.4, current: 0.2, temp: 22 },
  { time: '08:00', soc: 95, voltage: 8.2, current: 1.8, temp: 24 },
  { time: '10:00', soc: 82, voltage: 7.9, current: 3.2, temp: 28 },
  { time: '12:00', soc: 68, voltage: 7.6, current: 4.1, temp: 32 },
  { time: '14:00', soc: 55, voltage: 7.4, current: 3.8, temp: 30 },
  { time: '16:00', soc: 48, voltage: 7.3, current: 2.5, temp: 27 },
  { time: '18:00', soc: 42, voltage: 7.2, current: 1.5, temp: 25 },
  { time: '20:00', soc: 65, voltage: 7.8, current: -1.2, temp: 24 },
];

const solarWeekly = [
  { day: 'Mon', yield: 18, peak: 4.2 },
  { day: 'Tue', yield: 22, peak: 4.8 },
  { day: 'Wed', yield: 12, peak: 3.1 },
  { day: 'Thu', yield: 25, peak: 5.0 },
  { day: 'Fri', yield: 20, peak: 4.5 },
  { day: 'Sat', yield: 28, peak: 5.2 },
  { day: 'Sun', yield: 26, peak: 4.9 },
];

const loadBreakdown = [
  { name: 'Servos', value: 45, color: '#0682C8' },
  { name: 'Raspberry Pi', value: 25, color: '#10B981' },
  { name: 'ESP32', value: 10, color: '#F59E0B' },
  { name: 'Sensors', value: 8, color: '#8B5CF6' },
  { name: 'Camera', value: 12, color: '#EF4444' },
];

const spending = [
  { month: 'Jan', amount: 120 },
  { month: 'Feb', amount: 280 },
  { month: 'Mar', amount: 180 },
  { month: 'Apr', amount: 340 },
  { month: 'May', amount: 150 },
  { month: 'Jun', amount: 90 },
  { month: 'Jul', amount: 80 },
];

const tooltipStyle = {
  backgroundColor: '#111827',
  border: '1px solid rgba(148, 163, 184, 0.1)',
  borderRadius: '8px',
  fontSize: '0.8rem',
  color: '#F1F5F9'
};

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null;
  return (
    <div style={tooltipStyle}>
      <p style={{ fontWeight: 600, marginBottom: 4, padding: '8px 12px 0' }}>{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color, padding: '2px 12px' }}>
          {p.name}: {p.value}{p.unit || ''}
        </p>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const kpis = [
    {
      label: 'Current Load',
      value: '2.4A',
      detail: 'Avg: 1.8A',
      icon: <Activity size={20} />,
      status: 'normal',
      color: 'var(--clr-accent)',
    },
    {
      label: 'Battery SOC',
      value: '84%',
      detail: 'SOH: 98% (Healthy)',
      icon: <BatteryCharging size={20} />,
      status: 'good',
      color: 'var(--clr-success)',
    },
    {
      label: 'Battery Temp',
      value: '27°C',
      detail: 'Within safe range',
      icon: <Thermometer size={20} />,
      status: 'normal',
      color: 'var(--clr-accent)',
    },
    {
      label: 'Solar Yield',
      value: '22 Wh',
      detail: 'Peak: 4.8W',
      icon: <Sun size={20} />,
      status: 'good',
      color: 'var(--clr-warning)',
    },
    {
      label: 'Total Spent',
      value: '$1,240',
      detail: '$260 remaining',
      icon: <TrendingUp size={20} />,
      status: 'normal',
      color: 'var(--clr-accent-2)',
    },
    {
      label: 'Uptime',
      value: '14h 23m',
      detail: 'Since last boot',
      icon: <Clock size={20} />,
      status: 'good',
      color: 'var(--clr-accent-light)',
    },
  ];

  return (
    <div className="dashboard">
      <div className="container-wide">
        {/* Header */}
        <div className="dash__header">
          <div>
            <h1>System Telemetry</h1>
            <p className="dash__time">
              <Clock size={14} />
              {time.toLocaleTimeString('en-US', { hour12: false })} — Live Monitoring
            </p>
          </div>
          <div className="dash__status">
            <span className="badge badge-success"><CheckCircle2 size={12} /> All Systems Nominal</span>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="dash__kpi-grid">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              className="dash__kpi card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="dash__kpi-icon" style={{ color: kpi.color }}>
                {kpi.icon}
              </div>
              <div className="dash__kpi-body">
                <span className="dash__kpi-label">{kpi.label}</span>
                <span className="dash__kpi-value">{kpi.value}</span>
                <span className="dash__kpi-detail">{kpi.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="dash__charts-row">
          <AnimatedSection className="card dash__chart-card dash__chart-card--wide">
            <div className="dash__chart-header">
              <h3>Battery Profile</h3>
              <div className="dash__chart-legend">
                <span style={{ color: '#0682C8' }}>● SOC (%)</span>
                <span style={{ color: '#EF4444' }}>● Current (A)</span>
                <span style={{ color: '#F59E0B' }}>● Temp (°C)</span>
              </div>
            </div>
            <div className="dash__chart-wrap">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={batteryTimeline}>
                  <defs>
                    <linearGradient id="gradSoc" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0682C8" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#0682C8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                  <XAxis dataKey="time" stroke="#64748B" fontSize={12} tickLine={false} />
                  <YAxis yAxisId="left" stroke="#64748B" fontSize={12} tickLine={false} domain={[0, 100]} />
                  <YAxis yAxisId="right" orientation="right" stroke="#64748B" fontSize={12} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area yAxisId="left" type="monotone" dataKey="soc" stroke="#0682C8" fill="url(#gradSoc)" strokeWidth={2} name="SOC" />
                  <Line yAxisId="right" type="monotone" dataKey="current" stroke="#EF4444" dot={false} strokeWidth={1.5} name="Current" />
                  <Line yAxisId="right" type="monotone" dataKey="temp" stroke="#F59E0B" dot={false} strokeWidth={1.5} strokeDasharray="4 4" name="Temp" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>

          <AnimatedSection className="card dash__chart-card" delay={0.1}>
            <div className="dash__chart-header">
              <h3>Load Breakdown</h3>
            </div>
            <div className="dash__chart-wrap dash__chart-wrap--pie">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={loadBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {loadBreakdown.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="dash__pie-legend">
                {loadBreakdown.map((item, i) => (
                  <div key={i} className="dash__pie-item">
                    <span className="dash__pie-dot" style={{ background: item.color }} />
                    <span>{item.name}</span>
                    <span className="mono">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Charts Row 2 */}
        <div className="dash__charts-row">
          <AnimatedSection className="card dash__chart-card" delay={0.15}>
            <div className="dash__chart-header">
              <h3>Weekly Solar Yield</h3>
            </div>
            <div className="dash__chart-wrap">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={solarWeekly}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="day" stroke="#64748B" fontSize={12} tickLine={false} />
                  <YAxis stroke="#64748B" fontSize={12} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                  <Bar dataKey="yield" fill="#F59E0B" radius={[4, 4, 0, 0]} name="Yield (Wh)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>

          <AnimatedSection className="card dash__chart-card" delay={0.2}>
            <div className="dash__chart-header">
              <h3>Monthly Spending</h3>
            </div>
            <div className="dash__chart-wrap">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={spending}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                  <XAxis dataKey="month" stroke="#64748B" fontSize={12} tickLine={false} />
                  <YAxis stroke="#64748B" fontSize={12} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
                  <Bar dataKey="amount" fill="#0682C8" radius={[4, 4, 0, 0]} name="Spent ($)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </AnimatedSection>
        </div>

        {/* Power Optimization */}
        <AnimatedSection delay={0.1}>
          <div className="card dash__optimization">
            <div className="dash__opt-header">
              <Leaf size={24} className="dash__opt-icon" />
              <div>
                <h3>Power Optimization Status</h3>
                <p>Active power-saving measures reducing consumption by ~35%</p>
              </div>
            </div>
            <div className="dash__opt-grid">
              <div className="dash__opt-item">
                <div className="dash__opt-indicator dash__opt-indicator--active" />
                <div>
                  <h4>Dynamic CPU Throttling</h4>
                  <p>Raspberry Pi 5 downclocks during idle — saves ~400mA</p>
                </div>
                <span className="badge badge-success">Active</span>
              </div>
              <div className="dash__opt-item">
                <div className="dash__opt-indicator dash__opt-indicator--active" />
                <div>
                  <h4>Servo Sleep Mode</h4>
                  <p>PCA9685 disables PWM when arms locked — prevents holding current</p>
                </div>
                <span className="badge badge-success">Active</span>
              </div>
              <div className="dash__opt-item">
                <div className="dash__opt-indicator dash__opt-indicator--warning" />
                <div>
                  <h4>Adaptive Inference</h4>
                  <p>YOLOv8 drops to 5fps when no motion detected — saves GPU power</p>
                </div>
                <span className="badge badge-warning">Standby</span>
              </div>
              <div className="dash__opt-item">
                <div className="dash__opt-indicator dash__opt-indicator--active" />
                <div>
                  <h4>Solar Priority Charging</h4>
                  <p>MPPT controller prioritizes solar input during daylight hours</p>
                </div>
                <span className="badge badge-success">Active</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Dashboard;
