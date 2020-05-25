const typeOptions = [
  {
    type: 'd',
    description: 'display: ',
  },
  {
    type: 'display',
    description: 'display: ',
  },
  {
    type: 'fw',
    description: 'font-weight: ',
  },
  {
    type: 'gc',
    description: 'grid-column:',
  },
  {
    type: 'gcs',
    description: 'grid-column: span',
  },
  {
    type: 'gr',
    description: 'grid-row: ',
  },
  {
    type: 'grs',
    description: 'grid-row: span',
  },
  {
    type: 'pad',
    description: 'padding: ',
  },
  {
    type: 'padding',
    description: 'padding: ',
  },
  {
    type: 'mar',
    description: 'margin: ',
  },
  {
    type: 'margin',
    description: 'margin: ',
  },
  {
    type: 'h',
    description: 'height: ',
  },
  {
    type: 'height',
    description: 'height: ',
  },
  {
    type: 'w',
    description: 'width: ',
  },
  {
    type: 'width',
    description: 'width: ',
  },
  {
    type: 'maxw',
    description: 'max-width: ',
  },
  {
    type: 'pos',
    description: 'position: ',
  },
  {
    type: 'position',
    description: 'position: ',
  },
  {
    type: 'top',
    description: 'top: ',
  },
  {
    type: 'bottom',
    description: 'bottom: ',
  },
  {
    type: 'left',
    description: 'left: ',
  },
  {
    type: 'right',
    description: 'right: ',
  },
  {
    type: 'ov',
    description: 'overflow: ',
  },
  {
    type: 'overflow',
    description: 'overflow: ',
  },
  {
    type: 'borderRadius',
    description: 'border-radius: ',
  },
  {
    type: 'fd',
    description: 'flex-direction: ',
  },
  {
    type: 'flex',
    description: 'flex: ',
  },
  {
    type: 'order',
    description: 'order: ',
  },
  {
    type: 'flexDirection',
    description: 'flex-direction: ',
  },
  {
    type: 'flexWrap',
    description: 'flex-wrap: ',
  },
  {
    type: 'jc',
    description: 'justify-content: ',
  },
  {
    type: 'ai',
    description: 'align-items: ',
  },
  {
    type: 'ta',
    description: 'text-align: ',
  },
  {
    type: 'fsize',
    description: 'font-size: ',
  },
  {
    type: 'lh',
    description: 'line-height',
  },
  {
    type: 'transform',
    description: 'transform: ',
  },
];

const findDescription = (type) => {
  return typeOptions.find((typeOption) =>
    typeOption.type == type ? true : false
  ).description;
};

const getMediaBP = (props) => {
  const { xs, sm, md, lg, xl, theme } = props;
  const mediaProps = { xs, sm, md, lg, xl };
  let mediaOptions = '';
  let mediaQueries = '';

  for (const prop in mediaProps) {
    const propOptions = mediaProps[prop];
    mediaOptions = '';
    for (const option in propOptions) {
      const mediaOption = `${findDescription(option)} ${propOptions[option]}; `;
      mediaOptions = `${mediaOptions} ${mediaOption}`;
    }
    if (propOptions && theme) {
      const mediaQuerie = `@media (min-width: ${theme.breakpoints[prop]}px) {
            ${mediaOptions}
          }`;
      mediaQueries = `${mediaQueries} ${mediaQuerie}`;
    }
  }
  return mediaQueries;
};

export default getMediaBP;
