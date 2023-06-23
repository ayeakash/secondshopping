// Shirts

import shirtBeach from './images/asset2/shirts/shirt-beach.jpg'
import shirtBlack from './images/asset2/shirts/shirt-black.jpg'
import shirtBrown from './images/asset2/shirts/shirt-brown.jpg'
import shirtBw from './images/asset2/shirts/shirt-bw.jpg'
import shirtChecks from './images/asset2/shirts/shirt-checks.jpg'
import shirtGirl from './images/asset2/shirts/shirt-girl-red.jpg'
import shirtSuit from './images/asset2/shirts/shirt-suit.jpg'
import shirtWhite from './images/asset2/shirts/shirt-white.jpg'

// pants

import pantBlack from './images/asset2/pants/pant-black-full.jpg'
import pantBlue from './images/asset2/pants/pant-blue.jpg'
import pantBrown from './images/asset2/pants/pant-brown.jpg'
import pantFormal from './images/asset2/pants/pant-formal.jpg'
import pantHanging from './images/asset2/pants/pant-hanging.jpg'

// shoes

import shoeBlack from './images/asset2/shoes/black-cool-shoes.jpg'
import shoeBoot from './images/asset2/shoes/boots.jpg'
import shoeLeather from './images/asset2/shoes/leather-shoes.jpg'
import shoeSleeper from './images/asset2/shoes/sleepers.jpg'
import shoeWhite from './images/asset2/shoes/white-in-hand.jpg'
import shoeBeach from './images/asset2/shoes/white-on-beach.jpg'
import shoewhait from './images/asset2/shoes/white-shoes.jpg'



const shirts = [
    {
        'id':1, 
        'category':'shirts',
        'image': shirtBeach,
        'title':'New Pattern Shirt',
        'mrp': 1499,
        'price': 499,
        'description': "Best Quality Fabric",
         

    },
    {
        'id':2, 
        'category':'shirts',
        'image': shirtBlack,
        'title':'New cool shirt',
        'mrp': 1699,
        'price': 699,
        'description': "Best Quality Fabric"        
    },
    {
        'id':3, 
        'category':'shirts',
        'image': shirtBrown,
        'title':'Funky Shirt',
        'mrp': 1299,
        'price': 299,
        'description': "Best Quality Fabric"        
    },
    {
        'id': 4, 
        'category':'shirts',
        'image': shirtBw,
        'title':'Black Suit',
        'mrp': 1599, 
        'price': 599, 
        'description': "Best Quality Fabric"        
    },
    {
        'id':5, 
        'category':'shirts',
        'image': shirtChecks,
        'title':'Normal shirt',
        'mrp': 199,
        'price': 99,
        'description': "Best Quality Fabric"        
    },
    {
        'id':6, 
        'category':'shirts',
        'image': shirtGirl,
        'title':'Normal shirt',
        'mrp': 199,
        'price': 99,
        'description': "Best Quality Fabric"        
    },
    {
        'id':7, 
        'category':'shirts',
        'image': shirtSuit,
        'title':'Normal shirt',
        'mrp': 199,
        'price': 99,
        'description': "Best Quality Fabric"        
    },
    {
        'id':8, 
        'category':'shirts',
        'image': shirtWhite,
        'title':'Normal shirt',
        'mrp': 199,
        'price': 99,
        'description': "Best Quality Fabric"        
    },


]


// Pants

const pants = [
    {
        'id':1, 
        'category':'pants',
        'image': pantHanging,
        'title':'New Folded pant',
        'mrp': 1499,
        'price': 499,
        'description': "Best Quality Fabric"        
    },
    {
        'id':2, 
        'category':'pants',
        'image': pantBlack,
        'title':'New Graphic Pant',
        'mrp': 1699,
        'price': 699,
        'description': "Best Quality Fabric"        
    },
    {
        'id':3, 
        'category':'pants',
        'image': pantBlue,
        'title':'Ripped pant',
        'mrp': 1299,
        'price': 299,
        'description': "Best Quality Fabric"        
    },
    {
        'id': 4, 
        'category':'pants',
        'image': pantBrown,
        'title':'Short and suit',
        'mrp': 1599, 
        'price': 599, 
        'description': "Best Quality Fabric"        
    },
    {
        'id': 5, 
        'category':'pants',
        'image': pantFormal,
        'title':'Short and suit',
        'mrp': 1599, 
        'price': 599, 
        'description': "Best Quality Fabric"        
    },
    {
        'id': 4, 
        'category':'pants',
        'image': pantHanging,
        'title':'Short and suit',
        'mrp': 1599, 
        'price': 599, 
        'description': "Best Quality Fabric"        
    },
]






// shoes

const shoes = [
    
    {
        'id':1, 
        'category':'shoes',
        'image': shoeBeach,
        'title':'Chappal',
        'mrp': 1499,
        'price': 499,
        'description': "Best Quality Fabric"        
    },
    {
        'id':2, 
        'category':'shoes',
        'image': shoeBlack,
        'title':'The cool shoe',
        'mrp': 1699,
        'price': 699,
        'description': "Best Quality Fabric"        
    },
    {
        'id':3, 
        'category':'shoes',
        'image': shoeBoot,
        'title':'The Cooler shoe',
        'mrp': 1299,
        'price': 299,
        'description': "Best Quality Fabric"        
    },
    {
        'id': 4, 
        'category':'shoes',
        'image': shoeLeather,
        'title':"Kid's shoes",
        'mrp': 1599, 
        'price': 599, 
        'description': "Best Quality Fabric"        
    },
    {
        'id':5, 
        'category':'shoes',
        'image': shoeSleeper,
        'title':'Mojadi',
        'mrp': 199,
        'price': 99,
        'description': "Best Quality Fabric"        
    },
    {
        'id':6, 
        'category':'shoes',
        'image': shoeWhite,
        'title':'A better shoe',
        'mrp': 199,
        'price': 99,
        'description': "Best Quality Fabric"        
    },
    {
        'id':7, 
        'category':'shoes',
        'image': shoewhait,
        'title':'Sneakers',
        'mrp': 199,
        'price': 99,
        'description': "Best Quality Fabric"        
    },


]


const productCardObject = {
    "shirts": shirts,
    "pants": pants,
    "shoes": shoes,
}

export default productCardObject

export { shirts, pants, shoes}