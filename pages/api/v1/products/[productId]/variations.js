const { api } = require('@config/index')

const handler = async (req, res) => {
	const { productId } = req.query
	switch (req.method) {
		case 'GET': {
			try {
				const response = await api.get(`products/${productId}/variations`)
				const variations = response.data
				return res.status(200).json(variations)
			} catch (error) {
				console.log(error)
			}
		}
		default: {
			return res.status(405).json({ 'Not Authorized': 'Method Not Allowed' })
		}
	}
}

export default handler
