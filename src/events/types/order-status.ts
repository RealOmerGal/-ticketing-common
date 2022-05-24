export enum OrderStatus {
    //New order created, ticket not been reserved yet
    Created = 'created',

    //The ticket the order is trying to reserve has already been reserved,
    //or when the user cancelled the order
    //or the order expires before payment
    Cancelled = 'cancelled',

    //The order has successfully reserved the ticket
    AwaitingPayment = 'awaiting:payment',

    //The order has reserved the ticket and the user has
    // provided payment successfully
    Complete = 'complete'
}