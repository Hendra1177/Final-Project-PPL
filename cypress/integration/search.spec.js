describe("Uji Coba Fitur Pencarian", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Pencarian dengan input 'Java Programming'", () => {
    cy.get(".py-2 > .w-full").type("Java Programming");
    cy.get(".py-2 > .px-6").click();
    cy.get(".book-item > .book-card > .book-desc > .book-title").should(
      ($data) => {
        expect($data).to.contain("java");
      }
    );
  });

  it("Pencarian dengan input 'linux'", () => {
    cy.get(".py-2 > .w-full").type("linux");
    cy.get(".py-2 > .px-6").click();
    cy.get(".book-item > .book-card > .book-desc > .book-title").should(
      ($data) => {
        expect($data).to.contain("linux");
      }
    );
  });
  it("Pencarian dengan input random text", () => {
    cy.get(".py-2 > .w-full").type("kbasflsdga");
    cy.get(".py-2 > .px-6").click();
    cy.get(".w-full > .text-xl").should(($data) => {
      expect($data).to.contain(" Tidak ada yang ditemukan ");
    });
  });
  it("Pencarian dengan input spasi(' ')", () => {
    cy.get(".py-2 > .w-full").type(" ");
    cy.get(".py-2 > .px-6").click();
    cy.get(".w-full > .text-xl").should(($data) => {
      expect($data).to.contain(" Tidak ada yang ditemukan ");
    });
  });
  it("Pencarian tanpa input value", () => {
    cy.get(".py-2 > .px-6").click();
    cy.get(".book-grids").should("be.visible");
  });
});
