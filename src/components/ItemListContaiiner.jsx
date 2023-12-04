import './ItemListContaiiner.css';

const ItemlistContainer = ({greeting}) => {

    return (

        <div className='banner1'>

            <div className='bannerTxt'>

                {greeting}
                <p className='bannerTxtSub'> A la mejor tienda para tu moto </p>

            </div>
        
        </div>
    )

}

export default ItemlistContainer;