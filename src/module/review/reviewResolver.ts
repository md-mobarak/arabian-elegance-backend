import reviewService from './reviewService';

const reviewResolver = {
    Query: {
        review: async (_: any, { id }: { id: string }) => reviewService.getReview(id),
        reviews: async () => reviewService.getAllReviews(),
    },
    Mutation: {
        createReview: async (_: any, args: any) => reviewService.createReview(args),
        updateReview: async (_: any, { id, input }: { id: string; input: any }) =>
            reviewService.updateReview(id, input),
        deleteReview: async (_: any, { id }: { id: string }) => reviewService.deleteReview(id),
    },
};

export default reviewResolver;
