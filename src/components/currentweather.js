import './currentweather.css';

export const CurrentWeather = ()=>{
    return(
<div className='weather'>
    <div className='top'>
        </div>
        <p className='city'>Belgrade</p>
        <p className='description'>Sunny</p>
        <img src='./icons/01d.png'/>
        <div className='bottom'>
            <p className='temperature'>18C</p>
            <div className='details'>
                <div className='parameter-row'>
                    <span className='parameter-label'>Details</span>
                </div>
                <div className='parameter-row'>
                <span className='parameter-label'>Wind</span>
                <span className='parameter-value'>2 m/s</span>
                </div>
                <div className='parameter-row'>
                <span className='parameter-label'>Humidity</span>
                <span className='parameter-value'>15</span>
                </div>
                <div className='parameter-row'>
                <span className='parameter-label'>Wind</span>
                <span className='parameter-value'>2 m/s</span>
                </div>
            </div>
        
    </div>
    
    </div>
    )
}