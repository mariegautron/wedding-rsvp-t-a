const themeTokens = {
  token: {
    colorPrimary: "#232323",
    colorInfo: "#232323",
    colorPrimaryBg: "#f7f7f7",
    colorSuccess: "#606c5d",
    colorSuccessBg: "#f1f5ef",
    colorWarning: "#f1c376",
    colorSuccessBorder: "#f1f5ef",
    colorWarningText: "#d1a55a",
    colorError: "#bc5354",
    colorErrorBorder: "#fcf0ed",
    colorTextBase: "#232323",
    colorBgBase: "#ffffff",
    wireframe: false,
  },
  components: {
    Button: {
      fontSize: 16,
      borderRadiusLG: 50,
      borderRadius: 50,
      borderRadiusSM: 50,
      paddingBlock: 8,
      controlHeight: 50,
      paddingInline: 40,
    },
    Typography: {
      fontFamilyCode: "Dancing Script, cursive",
      linkDecoration: "underline",
      lineHeight: 1.5,
      fontSizeHeading1: 80,
    },
    Dropdown: {
      fontSize: 16,
    },
    Menu: {
      colorBgContainer: "#FFFBF5",
      itemBg: "rgb(96, 108, 93)",
      itemColor: "rgba(255, 255, 255, 0.88)",
      itemDisabledColor: "rgba(96, 108, 93, 0.25)",
      itemHoverBg: "rgb(241, 195, 118)",
      itemHoverColor: "rgb(35, 35, 35)",
      itemSelectedBg: "rgb(241, 195, 118)",
      itemSelectedColor: "rgb(35, 35, 35)",
      itemActiveBg: "rgb(241, 195, 118)",
    },
  },
};

export default themeTokens;
