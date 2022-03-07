//Supported blocks
/*
  Paragraph
  Header
  Table
  Raw
  Delimiter
  Code
  Quote
  List
  Embed
  Image
  Simple-image
 */

describe('Test cases', () => {
  it('Render paragraph 1', () => {
    const block = {
      data: {
        "text": "New York City Employees’ Retirement System (NYCERS) trustees voted Wednesday to approve the divestment of investments in securities issued by Russian companies."
      },
      type: "paragraph"
    }
    console.log(block)
  })

  it('Render paragraph 2', () => {
    const block = {
      "data": {
      "text": "&nbsp;More information can be read&nbsp;<a href=\"https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fcomptroller.nyc.gov%2Fwp-content%2Fuploads%2F2022%2F03%2F2022-03-02-R-2-Russian-Divestment-Resolution.pdf&amp;data=04%7C01%7CElly.MORILLO%40news12.com%7C2e7d479596e14a28b16c08d9fd481691%7Ccf535dc073fc41eaa17417f37ced7fe7%7C0%7C0%7C637819308323700176%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&amp;sdata=%2BldIZ%2BirHVnnpMGDQjuWsslTxP9VrUXeYBySfxCOsU4%3D&amp;reserved=0\" target=\"_blank\">here</a>.&nbsp;&nbsp;"
      },
      "type": "paragraph"
    }
    console.log(block)
  })

  it('Render paragraph 3', () => {
    const block = {
      "data": {
      "text": "\"As the unlawful invasion of Ukraine by the Putin regime continues, the investment risks, economic volatility, and calls for an immediate end to these acts of aggressions by the global community have only grown,” said Comptroller Brad Lander. “Today’s vote by the New York City Employees’ Retirement System sends both a strong signal of solidarity with the Ukranian people and reinforces the commitment of NYCERS to safeguard the assets of the System’s thousands of beneficiaries.”"
    },
      "type": "paragraph"
    }
    console.log(block)
  })
})
