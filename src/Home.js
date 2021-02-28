import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
			<div className="home">
				<div className="home__container">
					<img
						className="home__image"
						src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
						alt=""
					/>

					<div className="home__row">
						<Product
							title="Berbere Spice 2.0 oz by Zamouri Spices"
							id="5"
							price={8.95}
							rating={5}
							image="https://m.media-amazon.com/images/I/81BqJ5wrRIL._AC_UL320_.jpg"
						/>

						<Product
							title="Traditional Ethiopian cross art Ethiopian Cross T-Shirt"
							id="7"
							price={19.95}
							rating={5}
							image="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81sax9vVGaL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png"
						/>
						<Product
							title="Rerii Small Bookshelf, 2 Tier Bookshelf for Small Spaces, 2 Shelf Bookcase Kids, Book Storage Organizer Case Open Shelves for Bedroom Living Room Office, White"
							id="8"
							price={39.98}
							rating={4}
							image="https://images-na.ssl-images-amazon.com/images/I/61Ck%2BU4k1%2BL._AC_SX679_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							title="SENYUN 36-Inch Folding Trampoline Mini Rebounder, Suitable for Indoor and Outdoor use, for Two Kids with safty Padded Cover-Pink/Blue"
							id="123456"
							price={69.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/61b-TXrzexL._AC_SY450_.jpg"
						/>
						<Product
							title="Play Dough Tools for Kids, Various Plastic Moulds, Assorted Colors, 45 Pieces"
							id="222"
							price={12.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/81UFC6NOM0L._AC_SX679_.jpg"
						/>
						<Product
							title="White Tealights Bulk, Small Unscented Tea Light Candles for Home Decor, Table Centerpieces, Birthday Party, Marriage Proposal - 12 Candles/Box"
							id="456"
							price={6.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/51wPOsD7n1L._AC_SX679_.jpg"
						/>
						\
					</div>

					<div className="home__row">
						<Product
							title="Canon EOS 4000D Digital SLR Camera w/ 18-55MM DC III Lens Kit (Black) with Accessory Bundle, Package Includes: SanDisk 32GB Card + DSLR Bag + 50’’ Tripod+ Inspire Digital Cloth (International Model)"
							id="6543"
							price={489.0}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/81udlReapmL._AC_SX679_.jpg"
						/>
						<Product
							title="hxflag 3x5 Fts Ethiopia Flag with Lion Flag - Lion of Judah Flags"
							id="6543"
							price={5.95}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/71kHbC48ZIL._AC_SX679_.jpg"
						/>
						<Product
							title="Coogam Wooden Letter Number Construction Puzzle Educational Stacking Blocks Toy Set Shape Color Sorter Pegboard Activity Board Sort Game for Kids Toddler Gift Preschool Learning STEM Toy"
							id="6543"
							price={9.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/61Povz2uVDL._AC_SX679_.jpg"
						/>
					</div>

					<div className="home__row">
						<Product
							title="BERON Professional Vintage TV Movie Film Clap Board Slate Cut Prop Director Clapper (Black)"
							price={12.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/61ltM1hUVHL._AC_SY450_.jpg"
						/>
						<Product
							title="Neewer Film Movie Video Making System Kit for Canon Nikon Sony and Other DSLR Cameras Video Camcorders, Includes: C-Shaped Bracket,Handle Grip,15mm Rod,Matte Box,Follow Focus,Shoulder Rig (Red+Black)"
							id="6543"
							price={55.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/71d8RugVUVL._AC_SY450_.jpg"
						/>
						<Product
							title="Zecti Camera Slider, 16 inches/40 Centimeters Adjustable Carbon Fiber Camera Dolly Track Slider Video Stabilizer Rail for Camera DSLR Video Movie Photography Camcorder Stabili"
							id="6543"
							price={9.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/71Cg%2BAAZpML._AC_SY450_.jpg"
						/>
					</div>
				</div>
			</div>
		);
}

export default Home

