angular.module('cCareApp')

.service('productService', function() {
	
	var self = this;

	self.products = [
		{
			id:1,
			name:'CPAP inhaler',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:499.99,
			onSale: true,
			salePrice:0,
			reviews:[],
			features:[],
			resources:[],
			weight:0,
			dimensions:"200x10 in",
			productType:"Baby & Toddler",
			vid:[]

		},
		{
			id:2,
			name:'CPAP inhaler',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:99.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"CPAP Machines",
			vid:[]

		},
		{
			id:3,
			name:'CPAP nebulizer',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:199.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"CPAP Masks",
			vid:[]

		},
		{
			id:4,
			name:'CPAP nebulizer',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:499.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Hospital Beds",
			vid:[]

		},
		{
			id:5,
			name:'CPAP machine',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:499.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Incontinence",
			vid:[]

		},
		{
			id:6,
			name:'CPAP machine',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:1499.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Mobility Assistive Equipment",
			vid:[]

		},
		{
			id:7,
			name:'CPAP machine',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:2499.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Nebulizers",
			vid:[]

		},
		{
			id:8,
			name:'CPAP respirator',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:299.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Oxygen",
			vid:[]

		},
		{
			id:9,
			name:'CPAP respirator',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:419.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Pain Relief",
			vid:[]

		},
		{
			id:10,
			name:'company2 respirator',
			company:'company2',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:400.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Power Solutions",
			vid:[]

		},
		{
			id:11,
			name:'company2 inhaler',
			company:'company2',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:499.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Provent Therapy",
			vid:[]

		},
		{
			id:12,
			name:'company2 nebulizer',
			company:'company2',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:499.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Ventilators",
			vid:[]

		},
		{
			id:13,
			name:'company3 nebulizer',
			company:'company3',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:89.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Nebulizers",
			vid:[]

		},
		{
			id:14,
			name:'company3 nebulizer',
			company:'company3',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:49.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Nebulizers",
			vid:[]

		},
		{
			id:15,
			name:'company3 nebulizer',
			company:'company3',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:999.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Nebulizers",
			vid:[]

		},
		{
			id:16,
			name:'company3 machine',
			company:'company3',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:499.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"CPAP Machines",
			vid:[]

		},
		{
			id:17,
			name:'company4 product',
			company:'company4',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:399.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Baby & Toddler",
			vid:[]

		},
		{
			id:18,
			name:'company4 inhaler',
			company:'company4',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:500.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Hospital Beds",
			vid:[]

		},
		{
			id:19,
			name:'company4 machine',
			company:'company4',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:89.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Oxygen",
			vid:[]

		},
		{
			id:20,
			name:'company4 machine',
			company:'company4',
			img:'imgs/product.png', //Subject to change
			description:'An item that will aid your health',
			price:700.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:[],
			resources:[],
			weight:0,
			dimensions:"50 x 100in",
			productType:"Ventilators",
			vid:[]

		}

	];

	self.findProduct = function(id) {
		
		return self.products[id];		

	};

})