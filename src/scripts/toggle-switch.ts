'use strict';

/************************************************
 * Switch template                              *
 ************************************************
   <div class='.toggle-switch'>
     <div class='toggle-switch-actuator'></div>
   </div>

   const properties = {                                      
     size: 1.3,
     color: {
       body: grey;
       actuator: '#7af',
       active: #65f,
     }
   };

   // Module usage:
   const button = newBtn(properties);
   activate(properties, DOM);
 ************************************************/

interface Properties {
  size?: number;
  background?: {
    active?: string;
    actuator?: string;
    toggleSwitch?: string;
  };
}

// Generate and returns new toggle switch dom
function newBtn(properties: Properties) {
  properties = processProperties(properties);

  const toggleSwitch = document.createElement('div');
  toggleSwitch.className = 'toggle-switch';
  toggleSwitch.style.cssText = switchCSS(
    properties.background.toggleSwitch,
    properties.size
  );

  const actuator = document.createElement('div');
  actuator.className = 'toggle-switch-actuator';
  actuator.style.cssText = actuatorCSS(
    properties.background.actuator,
    properties.size
  );
  actuator.addEventListener('click', (event) => {
    animate(toggleSwitch, event.target as HTMLDivElement, properties);
  });

  toggleSwitch.appendChild(actuator);

  return toggleSwitch;
}

// Turns all elements in dom with "toggle-switch" class to switches
function activate(
  properties: Properties = undefined,
  dom: HTMLDivElement = undefined
) {
  let switches: NodeListOf<HTMLDivElement>;
  properties = processProperties(properties);

  if (dom === undefined) {
    switches = document.querySelectorAll('.toggle-switch');
  } else {
    switches = dom.querySelectorAll('.toggle-switch');
  }

  for (let i = 0; i < switches.length; ++i) {
    switches[i].style.cssText = switchCSS(
      properties.background.toggleSwitch,
      properties.size
    );

    const actuator: HTMLDivElement = switches[i].querySelector(
      '.toggle-switch-actuator'
    );
    actuator.style.cssText = actuatorCSS(
      properties.background.actuator,
      properties.size
    );
    actuator.addEventListener('click', (event) => {
      animate(switches[i], event.target as HTMLDivElement, properties);
    });
  }
}

// Animate button on when triggered
function animate(
  toggleSwitch: HTMLDivElement,
  actuator: HTMLDivElement,
  properties: Properties
) {
  const margin = actuator.style.marginLeft;

  if (margin === '' || margin === `${calc(3 * properties.size)}px`) {
    actuator.style.marginLeft = `${calc(17.5 * properties.size)}px`;
    toggleSwitch.style.background = properties.background.active;
  } else {
    actuator.style.marginLeft = `${calc(3 * properties.size)}px`;
    toggleSwitch.style.background = properties.background.toggleSwitch;
  }
}

// Check and fix missing properties
function processProperties(properties: Properties) {
  const defaultProperties = {
    size: 1.3,
    background: {
      active: '#3af',
      actuator: '#fff',
      toggleSwitch: '#aaa'
    }
  };

  Object.freeze(defaultProperties);

  if (!properties) {
    properties = structuredClone(defaultProperties);
  } else {
    if (properties.size) properties.size = calc(properties.size) as number;

    if (!properties.background) {
      properties.background = defaultProperties.background;
    } else {
      Object.setPrototypeOf(
        properties.background,
        defaultProperties.background
      );
    }
  }

  Object.setPrototypeOf(properties, defaultProperties);

  return properties;
}

// Precision Calculated values to one decimal point
function calc(value: unknown) {
  const result = `${(value as number).toFixed(1)}`;

  if (result[result.length - 1] === '0') return parseInt(value as string);

  return result;
}

// Get Switch CSS with an adjustment in values
function switchCSS(bg: string, size: number) {
  return `\
    background: ${bg};
    border-radius: ${10 * size}px;
    height: ${16 * size}px;
    width: ${32 * size}px;
    display: inline-flex;
    justify-content: left;
    align-items: center;
    margin: ${5 * size}px;
    padding: 0;
    transition: background .4s ease-in-out .3s`;
}

// Get Actuator CSS with an adjustment in values
function actuatorCSS(bg: string, size: number) {
  return `\
    border-radius: ${12 * size}px;
    background: ${bg};
    margin: ${calc(3 * size)}px ${calc(3 * size)}px;
    height: ${10 * size}px;
    width: ${10 * size}px;
    transition: margin-left .6s ease-in-out .1s;`;
}

export default { activate, newBtn };
