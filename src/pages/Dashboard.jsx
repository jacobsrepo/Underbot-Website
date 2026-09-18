import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';
import { Activity, BatteryCharging, Sun, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import './Dashboard.css';

const batteryData = [
  { time: '08:00', soc: 100, load: 1.2 },
  { time: '10:00', soc: 92, load: 2.1 },
  { time: '12:00', soc: 85, load: 3.5 },
  { time: '14:00', soc: 78, load: 4.2 },
  { time: '16:00', soc: 70, load: 3.8 },
  { time: '18:00', soc: 65, load: 2.5 },
  { time: '20:00', soc: 60, load: 1.5 },
];

const solarYield = [
  { day: 'Mon', yield: 15 },
  { day: 'Tue', yield: 18 },
  { day: 'Wed', yield: 12 },
  { day: 'Thu', yield: 22 },
  { day: 'Fri', yield: 20 },
  { day: 'Sat', yield: 25 },
  { day: 'Sun', yield: 24 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container container">
      <div className="dashboard-header">
        <h1 className="text-gradient">System Telemetry</h1>
        <p className="text-muted">Live metrics from Underbot</p>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <div className="kpi-card glass-panel glow-border">
          <div className="kpi-icon-wrapper bg-blue">
            <Activity size={24} />
          </div>
          <div className="kpi-details">
            <p className="kpi-label">Current Load</p>
            <h3 className="kpi-value">2.4 <span className="kpi-unit">Amps</span></h3>
          </div>
        </div>
        
        <div className="kpi-card glass-panel glow-border">
          <div className="kpi-icon-wrapper bg-green">
            <BatteryCharging size={24} />
          </div>
          <div className="kpi-details">
            <p className="kpi-label">Battery SOC</p>
            <h3 className="kpi-value">84<span className="kpi-unit">%</span></h3>
            <p className="kpi-subtext"><ShieldCheck size={12} className="inline-icon"/> SOH: 98% (Healthy)</p>
          </div>
        </div>

        <div className="kpi-card glass-panel glow-border">
          <div className="kpi-icon-wrapper bg-yellow">
            <Sun size={24} />
          </div>
          <div className="kpi-details">
            <p className="kpi-label">Solar Yield Today</p>
            <h3 className="kpi-value">22<span className="kpi-unit">Wh</span></h3>
          </div>
        </div>

        <div className="kpi-card glass-panel glow-border">
          <div className="kpi-icon-wrapper bg-purple">
            <TrendingUp size={24} />
          </div>
          <div className="kpi-details">
            <p className="kpi-label">Finances</p>
            <h3 className="kpi-value">$1,240</h3>
            <p className="kpi-subtext text-cyan">Remaining Budget: $260</p>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="charts-grid">
        {/* Battery Discharge Curve */}
        <div className="chart-card glass-panel">
          <h3>Battery Discharge & Load Profile</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={batteryData}>
                <defs>
                  <linearGradient id="colorSoc" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-cyan)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--accent-cyan)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="time" stroke="var(--text-muted)" />
                <YAxis yAxisId="left" stroke="var(--accent-cyan)" />
                <YAxis yAxisId="right" orientation="right" stroke="var(--accent-pink)" />
                <Tooltip contentStyle={{ backgroundColor: 'var(--bg-darker)', borderColor: 'var(--glass-border)' }} />
                <Area yAxisId="left" type="monotone" dataKey="soc" stroke="var(--accent-cyan)" fillOpacity={1} fill="url(#colorSoc)" name="SOC (%)" />
                <Line yAxisId="right" type="monotone" dataKey="load" stroke="var(--accent-pink)" name="Load (A)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Solar Yield Bar Chart */}
        <div className="chart-card glass-panel">
          <h3>Weekly Solar Yield</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={solarYield}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="day" stroke="var(--text-muted)" />
                <YAxis stroke="#FFD700" />
                <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ backgroundColor: 'var(--bg-darker)', borderColor: 'var(--glass-border)' }} />
                <Bar dataKey="yield" fill="#FFD700" radius={[4, 4, 0, 0]} name="Yield (Wh)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Power Saving Tips */}
      <div className="glass-panel power-saving-panel">
        <div className="panel-header">
          <Zap className="text-gradient" size={28} />
          <h2>Power Optimization</h2>
        </div>
        <div className="optimization-list">
          <div className="opt-item">
            <div className="opt-indicator bg-green"></div>
            <div>
              <h4>Sleep Mode Active</h4>
              <p>Raspberry Pi 5 reduces clock speed during idle times, saving ~400mA.</p>
            </div>
          </div>
          <div className="opt-item">
            <div className="opt-indicator bg-blue"></div>
            <div>
              <h4>Servo Deactivation</h4>
              <p>PCA9685 disables PWM to servos when arms are locked, preventing holding current drain.</p>
            </div>
          </div>
          <div className="opt-item">
            <div className="opt-indicator bg-yellow"></div>
            <div>
              <h4>Dynamic Inference</h4>
              <p>YOLOv8 runs at 5fps instead of 30fps when no motion is detected.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
