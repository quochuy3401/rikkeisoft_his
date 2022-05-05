import './SimpleLoading.css'

export default function SimpleLoading() {
    const loadingGif = 'https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif'

    return(
        <div className='sload-container'>
            <div className='sload'>
                <img src={loadingGif} alt="" />
            </div>
        </div>
    );
}