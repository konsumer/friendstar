// if for "has all flags"

export const id = 'EVENT_IF_FLAGS_HAS_ALL'
export const groups = ['EVENT_GROUP_CONTROL_FLOW']
export const subGroups = {
  EVENT_GROUP_CONTROL_FLOW: 'EVENT_GROUP_VARIABLES'
}

export const autoLabel = (fetchArg, input) => {
  const flags = [
    input.flag1,
    input.flag2,
    input.flag3,
    input.flag4,
    input.flag5,
    input.flag6,
    input.flag7,
    input.flag8,
    input.flag9,
    input.flag10,
    input.flag11,
    input.flag12,
    input.flag13,
    input.flag14,
    input.flag15,
    input.flag16
  ]
    .map((value, i) => {
      if (value) {
        return String(i + 1)
      }
      return ''
    })
    .filter((i) => i)
    .join(',')
  return `If ${fetchArg('variable')} has all flags ${flags}`
}

/*
export const fields = [].concat(
  [
    {
      key: 'variable',
      label: l10n('FIELD_VARIABLE'),
      description: l10n('FIELD_VARIABLE_DESC'),
      type: 'variable',
      defaultValue: 'LAST_VARIABLE'
    },
    {
      type: 'break'
    }
  ],
  Array(16)
    .fill()
    .map((_, i) => {
      return {
        key: `flag${i + 1}`,
        label: l10n('FIELD_FLAG_N', { n: i + 1 }),
        description: l10n('FIELD_FLAG_SET_N_DESC', { n: i + 1 }),
        hideFromDocs: i > 3,
        type: 'flag',
        width: '50%',
        flexBasis: '40%',
        defaultValue: false
      }
    })
)
*/

export const compile = (input, helpers) => {
}
