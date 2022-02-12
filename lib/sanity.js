import sanity_client from '@sanity/client';

export const client = sanity_client({
    projectId: 'dk0dg5q5',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sk8dInHnp9MSGN0X4wwgS9gXYj6S0OhmoSI6roqOjUantiIj2WX4NOS4So2lvVWKTxMrJcjBu9JbPBPmJa4wYneNeYPsi2N3qWUvlkNBpaxd94EFGCzJYkCTuFQsNYj32RJLI5sLkMxhSInaesESkZr7iXffIZGi0nF9L4KwsG8sgPFkVcFG',
    useCdn: false,
})