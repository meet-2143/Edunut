import React from 'react'
import './RightSidebar.css'  
import comment from './msg.svg'
import pen from './pen.svg'

const Widget = () => {
  return (
    <div className='widget'>
<h4>Edunut Blog</h4>
<div className='right-sidebar-div-1'>
<img src={pen} alt="pen" width='18' />
<p>Observability is key to the future of the software(and your careerss)</p>
</div>
<div className='right-sidebar-div-2'>
<img src={pen} alt="pen" width='18' />
<p>How AI can change the Human Life?</p>

</div>
<h4>Important Trends in Industry</h4>
<div className='right-sidebar-div-1'>
<img src={comment} alt="comment" width='18' />
<p>For competing with chatGPT Google launched BARD </p>
</div>
<div className='right-sidebar-div-2'>
<img src={comment} alt="comment" width='18' />
<p>Big Data Biometrics Blockchain Drones Immersive Technologies Internet of Things.</p>

</div>

<h4>Popular working fields into the I.T. industry</h4>
<div className='right-sidebar-div-1'>

<p>Machine Learning and Artificial Intelligence</p>
</div>
<div className='right-sidebar-div-2
'>
<p>Cloud Computing</p>

</div>

    </div>
  )
}

export default Widget