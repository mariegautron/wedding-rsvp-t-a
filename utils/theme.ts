const themeTokens = {
  token: {
    colorPrimary: "#4d5a4f",
    colorInfo: "#232323",
    colorPrimaryBg: "#ffff",
    colorSuccess: "#606c5d",
    colorSuccessBg: "#4d5a4f",
    colorWarning: "#f1c376",
    colorSuccessBorder: "#4d5a4f",
    colorWarningText: "#d1a55a",
    colorError: "#bc5354",
    colorErrorBorder: "#fcf0ed",
    colorTextBase: "#232323",
    colorBgBase: "#ffffff",
    wireframe: false,
  },
  components: {
    Button: {
      fontSize: 20,
      borderRadiusLG: 50,
      borderRadius: 50,
      borderRadiusSM: 50,
      paddingBlock: 8,
      controlHeight: 50,
      paddingInline: 40,
    },
    Typography: {
      linkDecoration: "underline",
      lineHeight: 1.5,
      fontSizeHeading1: 80,
    },
    Dropdown: {
      fontSize: 16,
    },
    Menu: {
      colorBgContainer: "#FFFBF5",
      itemBg: "rgb(77, 90, 79)",
      itemColor: "rgba(255, 255, 255, 0.88)",
      itemDisabledColor: "rgba(96, 108, 93, 0.25)",
      itemHoverBg: "rgb(77, 90, 79)",
      itemHoverColor: "rgb(255, 255, 255)",
      itemSelectedBg: "rgb(77, 90, 79)",
      itemSelectedColor: "rgb(255, 255, 255)",
      itemActiveBg: "rgb(77, 90, 79)",
    },
    Radio: {
      buttonCheckedBg: "rgb(77, 90, 79)",
      buttonSolidCheckedActiveBg: "rgb(77, 90, 79)",
      buttonSolidCheckedBg: "rgb(77, 90, 79)",
      buttonSolidCheckedHoverBg: "rgb(77, 90, 79)",
      buttonSolidCheckedColor: "rgb(255, 255, 255)",
      buttonColor: "rgb(77, 90, 79)",
    },
  },
};

export default themeTokens;
