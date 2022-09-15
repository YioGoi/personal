const brands = [
    { imgUrl: '../img/brands/varta.svg', altName: 'varta' },
    { imgUrl: '../img/brands/lenovo.svg', altName: 'lenovo' },
    { imgUrl: '../img/brands/bbs.svg', altName: 'bbs' },
    { imgUrl: '../img/brands/weller.svg', altName: 'weller' },
    { imgUrl: '../img/brands/british_airways.svg', altName: 'british airways' },
    { imgUrl: '../img/brands/lufthansa.svg', altName: 'lufthansa' },
]

const Brands = () => {
    return (
        <section className="container px-4 mx-auto">
            <div className="grid grid-cols-3 gap-8 lg:grid-cols-6">
                {brands.map((item, i) => (
                    <div key={i} className="flex justify-center">
                        <img src={item.imgUrl} alt={item.altName} />
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Brands;