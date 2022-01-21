import axios from 'axios';

const ProductService = { 
    productsSearch: async (limit = 8, currentPage = 1, title = null) => {

        const res = await axios.get('products', {
            params: {
                limit: limit,
                page: currentPage,
                title: title
            }
        })
        
        if (res.data.code === 200) {
            return res.data
        }
    },
    productsRecommend: async (limit = 100, currentPage = 1) => {

        const res = await axios.get('products', {
            params: {
                limit: limit,
                page: currentPage,
            }
        })
        if (res.data.code === 200) {
            return res.data
        }
    },
    productsAll: async (limit, currentPage = 1) => {
        const res = await axios.get('products', {
            params: {
                limit: limit, 
                currentPage: currentPage
            }
        })
       
        if (res.data.code === 200) {
            return res.data
        }
    },
    productsFeatures: async () => {
        const res = await axios.get('products')        
        if (res.data.code === 200) {
            const dataFeatures = res.data.data.filter(dataFeature => dataFeature.category_id === 7)
            return dataFeatures;
        }
    },
    productDetail: async (slug) => {
        const res = await axios.get(`/product/${slug}`)
        if (res.data.code === 200) {
            return res.data
        }
    },
}

export default ProductService;