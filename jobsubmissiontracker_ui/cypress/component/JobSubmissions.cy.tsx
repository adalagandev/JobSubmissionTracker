import JobSubmissions from "../../src/views/JobSubmissions";

describe('<JobSubmissions>', () => {
  it('mounts', () => {
    // @ts-ignore
    cy.mount(<JobSubmissions />)
  })
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
  it('Does not do much!', () => {
    expect(false).to.equal(false)
  })



  it('finds the content ', () => {
    // @ts-ignore
    cy.visit('https://staging.d1rnlteu7ycol4.amplifyapp.com/')


  })
  //https://staging.d1rnlteu7ycol4.amplifyapp.com/dashboard

})
