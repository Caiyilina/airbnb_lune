const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848a",
    textColor: "#767676",
  },
  textColor: {
    primaryColor: "#484848",
    secondaryColor: "#222222",
  },
  mixin: {
    boxShadow: `
    transition: all 0.2s ease;
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
    }
    `,
  },
};
export default theme;
