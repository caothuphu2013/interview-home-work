import moment from 'moment';

export const formatDateByCreatedAt = (createdAt) => moment(createdAt).format('MMM DD, YYYY')