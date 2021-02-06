module.exports = {
  payment: {
    getPaymentByDate: `
    select p.id, p.date, p.content, p.price, p.userId, p.categoryId, p.methodId, m.title as method, c.title as category, c.is_deposit from Payment as p 
    join Method as m 
    on p.methodId = m.id
    join Category as c
    on p.categoryId = c.id
    where p.date between :startDate and LAST_DAY(:startDate)
    and p.userId = :userId`,
    getPaymentById: `
      select p.id, p.date, p.content, p.price, p.userId, p.categoryId, p.methodId, m.title as method, c.title as category, c.is_deposit from Payment as p 
      join Method as m 
      on p.methodId = m.id
      join Category as c
      on p.categoryId = c.id
      where p.id = :paymentId
    `,
  },
};
