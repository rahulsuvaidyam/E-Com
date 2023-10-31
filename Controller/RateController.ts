import Rate from '../Model/RatingModel'
import response from '../HttpRespose/HttpRespose'
export default {
    rate: async (req: any, res: any) => {
        try {
            const { user, rate, product } = req.body;
            let previousRate = await Rate.findOne({ rated_by: user, product });
            if (previousRate) {
                const rated = await Rate.findByIdAndUpdate(previousRate._id, { rate }, { new: true })
                response.handleSuccess(res, rated, 'Product Rated')
            } else {
                const rated = await Rate.create({ rated_by: user, rate, product });
                response.handleSuccess(res, rated, 'Product Rated')
            }
        } catch (error) {
            response.somethingWentWrong(res)
        }
    },
}