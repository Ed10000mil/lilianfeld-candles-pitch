import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line, AreaChart, Area, Sankey, Rectangle, Layer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { Flame, DollarSign, ShieldCheck, Zap, Target, Users, Award, Package, Recycle, Clock, XCircle, Leaf } from 'lucide-react'
import Image from 'next/image'

const salesData = [
  { month: 'Jan', sales: 15000 },
  { month: 'Feb', sales: 25000 },
  { month: 'Mar', sales: 35000 },
  { month: 'Apr', sales: 50000 },
  { month: 'May', sales: 75000 },
]

const growthData = [
  { year: '2023', value: 100 },
  { year: '2024', value: 250 },
  { year: '2025', value: 500 },
  { year: '2026', value: 900 },
  { year: '2027', value: 1500 },
]

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']

const partnerData = [
  { name: "St Regis, The Palm", units: 44, revenue: 660 },
  { name: "Park Hyatt", units: 80, revenue: 1200 },
  { name: "One&Only, The Palm", units: 380, revenue: 5700 },
  { name: "St Regis, Abu Dhabi", units: 30, revenue: 450 },
  { name: "Ritz Carlton", units: 70, revenue: 1050 },
  { name: "Twitty", units: 12, revenue: 180 },
  { name: "Surf Club", units: 35, revenue: 525 },
  { name: "Event Planners", units: 300, revenue: 4500 }
]

const businessModelData = {
  nodes: [
    { name: "Lilianfeld Candle Holder", color: "#FF6B6B" },
    { name: "Maxi Tea-lights", color: "#4ECDC4" },
    { name: "Revenue", color: "#45B7D1" },
    { name: "Profit", color: "#FFA07A" },
    { name: "Candle cost", color: "#98D8C8" },
    { name: "Tea-light cost", color: "#FF6B6B" },
    { name: "Shipping/Logistics", color: "#4ECDC4" },
  ],
  links: [
    { source: 0, target: 2, value: 40 },
    { source: 1, target: 2, value: 60 },
    { source: 2, target: 3, value: 60 },
    { source: 2, target: 4, value: 15 },
    { source: 2, target: 5, value: 20 },
    { source: 2, target: 6, value: 5 },
  ],
}

const expenseBreakdownData = [
  { 
    name: 'Traditional Pillar Candles',
    fixedCosts: 0,
    annualReplacementCosts: 54000,
    label: '$54,000'
  },
  { 
    name: 'Lilianfeld Candles',
    fixedCosts: 5250,
    annualReplacementCosts: 16000,
    label: '$21,250'
  },
]

const problemData = [
  { name: 'Maintenance', value: 35 },
  { name: 'Cost', value: 30 },
  { name: 'Safety', value: 20 },
  { name: 'Environmental Impact', value: 15 },
]

const comparisonData = [
  { subject: 'Cost-effectiveness', Lilianfeld: 140, Traditional: 60 },
  { subject: 'Safety', Lilianfeld: 130, Traditional: 60 },
  { subject: 'Durability', Lilianfeld: 140, Traditional: 70 },
  { subject: 'Aesthetics', Lilianfeld: 130, Traditional: 100 },
  { subject: 'Practicality', Lilianfeld: 130, Traditional: 60 },
  { subject: 'Customizability', Lilianfeld: 120, Traditional: 50 },
]

interface MarketSizeCircleProps {
  size: string;
  label: string;
  sublabel: string;
}

const MarketSizeCircle: React.FC<MarketSizeCircleProps> = ({ size, label, sublabel }) => (
  <div className="flex flex-col items-center">
    <div className={`rounded-full bg-[#45B7D1] flex items-center justify-center text-white font-bold ${size}`}>
      {label}
    </div>
    <p className="mt-2 text-center text-sm">{sublabel}</p>
  </div>
)

interface CustomNodeProps {
  x: number;
  y: number;
  width: number;
  height: number;
  index: number;
  payload: {
    name: string;
    color: string;
  };
}

const CustomNode: React.FC<CustomNodeProps> = ({ x, y, width, height, index, payload }) => {
  const isOut = x + width + 6 > 1000
  return (
    <Layer key={`CustomNode${index}`}>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={payload.color}
        fillOpacity="0.8"
      />
      <text
        textAnchor={isOut ? 'end' : 'start'}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2}
        fontSize="14"
        stroke="#4A4A4A"
        fontWeight="bold"
      >
        {payload.name}
      </text>
    </Layer>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#4A4A4A] font-['Avenir', sans-serif]">
      <header className="bg-[#FFF5E6] py-12 shadow-lg">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-32 h-32 relative mr-12">
            <Image
              src="https://i.ibb.co/HTHBPdw/logo.png"
              alt="Lilianfeld Candles logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex-grow pl-8">
            <h1 className="text-5xl font-bold text-center text-[#4A4A4A] mb-4 animate-fade-in-down">Lilianfeld Candles</h1>
            <p className="text-xl text-center text-[#4A4A4A] opacity-90 animate-fade-in-up font-light italic">The Warmth of Tradition, the Convenience of Innovation</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <Tabs defaultValue="problem" className="space-y-16">
          <div className="bg-[#FFF5E6] p-1 rounded-lg shadow-md">
            <TabsList className="w-full grid grid-cols-5 bg-transparent p-0">
              {['problem', 'product', 'market', 'business', 'milestones'].map((tab, index) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className={`
                    text-lg py-3 px-4 transition-all duration-300
                    ${index === 0 ? 'rounded-l-lg' : ''}
                    ${index === 4 ? 'rounded-r-lg' : ''}
                    data-[state=active]:bg-[#B8D8BA] data-[state=active]:text-[#4A4A4A]
                    data-[state=inactive]:bg-transparent data-[state=inactive]:text-[#4A4A4A]
                    hover:bg-[#D0E0D0]
                  `}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="problem" className="space-y-16 animate-fade-in">
            <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="bg-[#FFF5E6] text-[#4A4A4A]">
                <CardTitle className="text-3xl">The Problem with Traditional Candles</CardTitle>
              </CardHeader>
              <CardContent className="p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <ul className="space-y-6 text-lg">
                      {[
                        { icon: Clock, title: "High Maintenance", description: "Constant cleaning, trimming, and dealing with melted wax" },
                        { icon: DollarSign, title: "Expensive", description: "High replacement costs due to daily use and short lifespan" },
                        { icon: Flame, title: "Safety Hazards", description: "Fire risks, especially in busy environments like hotels" },
                        { icon: Recycle, title: "Environmental Impact", description: "Petroleum-based paraffin wax emits toxic fumes and soot" },
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-4">
                          <item.icon className="w-8 h-8 text-[#4A4A4A] mt-1" />
                          <div>
                            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                            <p>{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={problemData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {problemData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ fontWeight: 'bold' }} />
                        <Legend formatter={(value) => <span style={{ color: '#4A4A4A', fontWeight: 'bold' }}>{value}</span>} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="bg-[#FFF5E6] text-[#4A4A4A]">
                <CardTitle className="text-3xl">Why Choose Lilianfeld Candles</CardTitle>
              </CardHeader>
              <CardContent className="p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    {[
                      { icon: DollarSign, title: "Cost Effectiveness", description: "70% more cost-effective with reusable outer body", color: "text-[#4A4A4A]" },
                      { icon: Zap, title: "Practicality", description: "No melting, no trimming, easier maintenance", color: "text-[#4A4A4A]" },
                      { icon: ShieldCheck, title: "Safety", description: "Flame-retardant outer shell, reduced fire hazards", color: "text-[#4A4A4A]" },
                      { icon: Flame, title: "Aesthetics and Ambiance", description: "Consistent appearance and real flame ambiance", color: "text-[#4A4A4A]" },
                      { icon: Leaf, title: "Eco-friendly", description: "Zero waste, soy wax candle pods used", color: "text-[#4A4A4A]" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <item.icon className={`w-10 h-10 ${item.color}`} />
                        <div>
                          <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                          <p className="text-lg">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={comparisonData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#4A4A4A', fontWeight: 'bold' }} />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name="Lilianfeld Candles" dataKey="Lilianfeld" stroke="#45B7D1" fill="#45B7D1" fillOpacity={0.6} />
                        <Radar name="Traditional Candles" dataKey="Traditional" stroke="#FF6B6B" fill="#FF6B6B" fillOpacity={0.6} />
                        <Legend formatter={(value) => <span style={{ color: '#4A4A4A', fontWeight: 'bold' }}>{value}</span>} />
                        <Tooltip contentStyle={{ fontWeight: 'bold' }} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="product" className="space-y-16 animate-fade-in">
            <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="bg-[#FFF5E6] text-[#4A4A4A]">
                <CardTitle className="text-3xl">Lilianfeld Candles Product</CardTitle>
              </CardHeader>
              <CardContent className="p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <div className="relative aspect-[3/4] bg-[#F0EAD6] rounded-lg overflow-hidden">
                      <Image
                        src="https://i.postimg.cc/N02TXRyS/Picture1.png"
                        alt="Lilianfeld Candle product showcasing its elegant design with a golden base and a glowing flame"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="relative aspect-[16/9] bg-[#F0EAD6] rounded-lg overflow-hidden">
                      <Image
                        src="https://i.ibb.co/Dg5F8HT/Picture2.png"
                        alt="Lilianfeld Candle product lineup showing various sizes and designs"
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2 space-y-6">
                    <h3 className="text-2xl font-semibold mb-4">Innovative Design</h3>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-center space-x-3">
                        <Package className="w-6 h-6 text-[#4A4A4A]" />
                        <span>Reusable outer body made from flame-retardant material</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Recycle className="w-6 h-6 text-[#4A4A4A]" />
                        <span>Replaceable soy wax candle pods for eco-friendly use</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Flame className="w-6 h-6 text-[#4A4A4A]" />
                        <span>Real flame ambiance with enhanced safety features</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Clock className="w-6 h-6 text-[#4A4A4A]" />
                        <span>Long-lasting: Each pod burns for 8-10 hours</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Target className="w-6 h-6 text-[#4A4A4A]" />
                        <span>Customizable designs to fit various decor styles</span>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <h3 className="text-2xl font-semibold mb-4">Cost-Efficiency Analysis</h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={expenseBreakdownData}
                            layout="vertical"
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" />
                            <Tooltip contentStyle={{ fontWeight: 'bold' }} />
                            <Legend formatter={(value) => <span style={{ color: '#4A4A4A', fontWeight: 'bold' }}>{value}</span>} />
                            <Bar dataKey="fixedCosts" name="Fixed Costs" fill="#45B7D1" stackId="a" />
                            <Bar dataKey="annualReplacementCosts" name="Annual Replacement Costs" fill="#FF6B6B" stackId="a" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="market" className="space-y-16 animate-fade-in">
            <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="bg-[#FFF5E6] text-[#4A4A4A]">
                <CardTitle className="text-3xl">Market Size & Opportunity</CardTitle>
              </CardHeader>
              <CardContent className="p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="space-y-8">
                    <MarketSizeCircle size="w-48 h-48 text-3xl" label="$3.54B" sublabel="Global Luxury Candle Market" />
                    <MarketSizeCircle size="w-40 h-40 text-2xl" label="$1.2B" sublabel="Hospitality Sector" />
                    <MarketSizeCircle size="w-32 h-32 text-xl" label="$500M" sublabel="Target Market" />
                  </div>
                  <div className="md:col-span-2 space-y-6">
                    <h3 className="text-2xl font-semibold mb-4">Target Audience</h3>
                    <ul className="space-y-4 text-lg">
                      <li className="flex items-center space-x-3">
                        <Users className="w-6 h-6 text-[#4A4A4A]" />
                        <span>Luxury hotels and resorts</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Users className="w-6 h-6 text-[#4A4A4A]" />
                        <span>High-end restaurants and spas</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Users className="w-6 h-6 text-[#4A4A4A]" />
                        <span>Event planners and wedding venues</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Users className="w-6 h-6 text-[#4A4A4A]" />
                        <span>Luxury homeowners and interior designers</span>
                      </li>
                    </ul>
                    <div className="mt-8">
                      <h3 className="text-2xl font-semibold mb-4">Sales Growth & Projections</h3>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            data={growthData}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip contentStyle={{ fontWeight: 'bold' }} />
                            <Area type="monotone" dataKey="value" name="Sales ($K)" stroke="#45B7D1" fill="#45B7D1" />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="business" className="space-y-16 animate-fade-in">
            <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="bg-[#FFF5E6] text-[#4A4A4A]">
                <CardTitle className="text-3xl">Business Model</CardTitle>
              </CardHeader>
              <CardContent className="p-8 bg-white">
                <div className="space-y-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Integrated Business Model</h3>
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <Sankey
                          data={businessModelData}
                          node={(nodeProps) => <CustomNode {...nodeProps} />}
                          link={{ stroke: '#B8D8BA' }}
                          nodePadding={50}
                          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                        >
                          <Tooltip contentStyle={{ fontWeight: 'bold' }} />
                        </Sankey>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Partner Sales & Monthly Revenue</h3>
                    <div className="h-96">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={partnerData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={100} />
                          <YAxis yAxisId="left" orientation="left" stroke="#45B7D1" />
                          <YAxis yAxisId="right" orientation="right" stroke="#FF6B6B" />
                          <Tooltip contentStyle={{ fontWeight: 'bold' }} />
                          <Legend formatter={(value) => <span style={{ color: '#4A4A4A', fontWeight: 'bold' }}>{value}</span>} />
                          <Bar yAxisId="left" dataKey="units" name="Units Sold" fill="#45B7D1" />
                          <Bar yAxisId="right" dataKey="revenue" name="Revenue ($)" fill="#FF6B6B" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="milestones" className="space-y-16 animate-fade-in">
            <Card className="overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <CardHeader className="bg-[#FFF5E6] text-[#4A4A4A]">
                <CardTitle className="text-3xl">Key Achievements & Future Milestones</CardTitle>
              </CardHeader>
              <CardContent className="p-8 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
                    <ul className="space-y-6">
                      {[
                        { icon: Award, title: "Product Launch", description: "Successfully launched in 5-star hotels" },
                        { icon: Users, title: "Partnerships", description: "Secured contracts with 10+ luxury hotels" },
                        { icon: DollarSign, title: "Revenue Growth", description: "Achieved 200% YoY growth in first 2 years" },
                        { icon: Leaf, title: "Sustainability", description: "Prevented 10,000 kg of wax waste" },
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-4">
                          <item.icon className="w-8 h-8 text-[#4A4A4A] mt-1" />
                          <div>
                            <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                            <p>{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-6">Future Milestones</h3>
                    <ul className="space-y-6">
                      {[
                        { icon: Target, title: "Market Expansion", description: "Enter 5 new countries by 2024" },
                        { icon: Users, title: "Client Base Growth", description: "Reach 100+ hotel partnerships by 2025" },
                        { icon: Package, title: "Product Line Extension", description: "Launch 3 new product variations by 2026" },
                        { icon: DollarSign, title: "Revenue Target", description: "Achieve $10M annual revenue by 2027" },
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-4">
                          <item.icon className="w-8 h-8 text-[#4A4A4A] mt-1" />
                          <div>
                            <h4 className="font-semibold text-xl mb-2">{item.title}</h4>
                            <p>{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6">Sales Projection</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip contentStyle={{ fontWeight: 'bold' }} />
                        <Legend formatter={(value) => <span style={{ color: '#4A4A4A', fontWeight: 'bold' }}>{value}</span>} />
                        <Line type="monotone" dataKey="sales" name="Monthly Sales ($)" stroke="#45B7D1" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}