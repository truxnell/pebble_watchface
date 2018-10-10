module.exports = [
  {
    "type": "heading",
    "defaultValue": "Watchface Configuration"
  },
  {
    "type": "text",
    "defaultValue": "Nat Awesome Watchface"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Colors"
      },
      {
        "type": "color",
        "messageKey": "HourColour",
        "defaultValue": "0x000000",
        "label": "Hour Number Color"
      },
      {
        "type": "color",
        "messageKey": "BoxOutline",
        "defaultValue": "0x000000",
        "label": "Box Outline Color"
      },
      {
        "type": "color",
        "messageKey": "BoxFillC",
        "defaultValue": "0x000000",
        "label": "Box Fill Color (Complete)"
      },
      {
        "type": "color",
        "messageKey": "BoxFillPartialC",
        "defaultValue": "0x000000",
        "label": "Box Fill Color (Partial)"
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "More Settings"
      },
      {
        "type": "toggle",
        "messageKey": "Blink",
        "label": "Enable Blinking",
        "defaultValue": true
      }
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];
