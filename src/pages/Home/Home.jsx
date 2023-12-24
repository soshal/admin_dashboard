import React from 'react'
import './Home.css';
import TopBox from '../../components/Topbox/Topboc';
import ChartBox from '../../components/chartBox/chartBox';
import BarChartBox from '../../components/barChartBox/barChartBox.jsx';
import { chartBoxUser,chartBoxProduct,chartBoxConversion,chartBoxRevenue,barChartBoxVisit } from '../../Data';
import PieChartBox from '../../components/pieCharts/PieChartsBox.jsx';
const Home = () => {
  return (
    <div className='home'>
     
      <div className="box box1">
        <TopBox/>
      </div>
      <div className="box box2"><ChartBox{...chartBoxUser}/></div>
      <div className="box box3"><ChartBox{...chartBoxProduct}/></div>
      <div className="box box4"><PieChartBox/></div>
      <div className="box box5"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box6"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box7"><BarChartBox {...chartBoxConversion} /></div>
      <div className="box box8"><BarChartBox {...chartBoxConversion} /></div>
      <div className="box box9"><BarChartBox {...barChartBoxVisit} /></div>
      </div>

   
  )
}

export default Home
