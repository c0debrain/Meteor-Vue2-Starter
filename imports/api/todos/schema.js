import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
	name: {
		type: String
	},
	createdAt: {
		type: Date,
		autoValue: function () {
			return new Date()
		}
	}
})
