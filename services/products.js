angular.module('cCareApp')

.service('productService', function() {
	
	var self = this;

	self.products = [
		{
			id:1,
			name:'CPAP inhaler',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:499.99,
			onSale: false,
			salePrice:0,
			reviews:[],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Baby & Toddler",
			vid:[]

		},
		{
			id:2,
			name:'CPAP inhaler',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:99.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"CPAP Machines",
			vid:[]

		},
		{
			id:3,
			name:'CPAP nebulizer',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:199.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"CPAP Masks",
			vid:[]

		},
		{
			id:4,
			name:'CPAP nebulizer',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:499.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Hospital Beds",
			vid:[]

		},
		{
			id:5,
			name:'CPAP machine',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:499.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Incontinence",
			vid:[]

		},
		{
			id:6,
			name:'CPAP machine',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:1499.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Mobility Assistive Equipment",
			vid:[]

		},
		{
			id:7,
			name:'CPAP machine',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:2499.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Nebulizers",
			vid:[]

		},
		{
			id:8,
			name:'CPAP respirator',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:299.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Oxygen",
			vid:[]

		},
		{
			id:9,
			name:'CPAP respirator',
			company:'CPAP',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:419.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Pain Relief",
			vid:[]

		},
		{
			id:10,
			name:'company2 respirator',
			company:'company2',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:400.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Power Solutions",
			vid:[]

		},
		{
			id:11,
			name:'company2 inhaler',
			company:'company2',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:499.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Provent Therapy",
			vid:[]

		},
		{
			id:12,
			name:'company2 nebulizer',
			company:'company2',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:499.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Ventilators",
			vid:[]

		},
		{
			id:13,
			name:'company3 nebulizer',
			company:'company3',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:89.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Nebulizers",
			vid:[]

		},
		{
			id:14,
			name:'company3 nebulizer',
			company:'company3',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:49.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Nebulizers",
			vid:[]

		},
		{
			id:15,
			name:'company3 nebulizer',
			company:'company3',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:999.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Nebulizers",
			vid:[]

		},
		{
			id:16,
			name:'company3 machine',
			company:'company3',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:499.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"CPAP Machines",
			vid:[]

		},
		{
			id:17,
			name:'company4 product',
			company:'company4',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:399.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Baby & Toddler",
			vid:[]

		},
		{
			id:18,
			name:'company4 inhaler',
			company:'company4',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:500.99,
			onSale: false,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Hospital Beds",
			vid:[]

		},
		{
			id:19,
			name:'company4 machine',
			company:'company4',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:89.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Oxygen",
			vid:[]

		},
		{
			id:20,
			name:'company4 machine',
			company:'company4',
			img:'imgs/product.png', //Subject to change
			description:'Designed for a more natural breathing experience, the S9 Escape Auto CPAP Machine delivers whisper-quiet therapy in a smooth waveform. This means a more restful night for both you and your partner. With its sleek contours and compact size, the S9 Escape Auto looks as natural at your bedside as a clock radio.',
			price:700.99,
			onSale: true,
			salePrice: 0,
			reviews: [],
			features:['AutoSet algorithm auto-adjusts to maintain optimal therapy pressure', 'Climate Control maintains ideal humidification according to real-time environment', 'Easy-Breathe motor offers the quietest therapy available', 'Easy-to-use controls and color LCD make menu navigation simple and intuitive'],
			resources:[],
			weight:'9.00 lbs',
			dimensions:"12.33 x 12.0 x 10.0in",
			productType:"Ventilators",
			vid:[]

		}

	];

	self.findProduct = function(id) {
		
		return self.products[id];		

	};

})