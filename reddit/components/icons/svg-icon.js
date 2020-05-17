import React from 'react'

const svgAttrs = { viewBox: '0 0 24 24', height: 24, width: 24, fill: 'none' }

const svgProps = {
  rss: [
    { name: 'path', attrs: { d: 'M4 11a9 9 0 0 1 9 9' } },
    { name: 'path', attrs: { d: 'M4 4a16 16 0 0 1 16 16' } },
    { name: 'circle', attrs: { cx: 5, cy: 19, r: 1} }
  ],
  codepen: [
    { name: 'polygon', attrs: { points: '12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2' } },
    { name: 'line', attrs: { x1: '12', y1: '22', x2: '12', y2: '15.5' } },
    { name: 'polyline', attrs: { points: '22 8.5 12 15.5 2 8.5' } },
    { name: 'polyline', attrs: { points: '2 15.5 12 8.5 22 15.5' } },
    { name: 'line', attrs: { x1: '12', y1: '2', x2: '12', y2: '8.5' } },
  ],
  facebook: [
    { name: 'path', attrs: { d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' }}
  ],
  github: [
    { name: 'path', attrs: { d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' }}
  ],
  gitlab: [
    { name: 'path', attrs: { d: 'M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z' }}
  ],
  instagram: [
    { name: 'rect', attrs: { x: 2, y: 2, width: 20, height: 20, rx: 5, ry: 5 } },
    { name: 'path', attrs: { d: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' } },
    { name: 'line', attrs: { x1: '17.5', y1: '6.5', x2: '17.5', y2: '6.5' } }
  ],
  linkedin: [
    { name: 'path', attrs: { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' }},
    { name: 'rect', attrs: { x: 2, y: 9, width: 4, height: 12 } },
    { name: 'circle', attrs: { cx: 4, cy: 4, r: 2} }
  ],
  slack: [
    { name: 'path', attrs: { d: 'M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z' } },
    { name: 'line', attrs: { x1: '12.57', y1: '5.99', x2: '16.15', y2: '16.39' } },
    { name: 'line', attrs: { x1: '7.85', y1: '7.61', x2: '11.43', y2: '18.01' } },
    { name: 'line', attrs: { x1: '16.39', y1: '7.85', x2: '5.99', y2: '11.43' } },
    { name: 'line', attrs: { x1: '18.01', y1: '12.57', x2: '7.61', y2: '16.15' } }
  ],
  stackoverflow: [
    { name: 'path', attrs: { d: 'M2.913 16.041v6.848h17.599v-6.848M7.16 18.696h8.925M7.65 13.937l8.675 1.8M9.214 9.124l8.058 3.758M12.086 4.65l6.849 5.66M15.774 1.111l5.313 7.162z' } },
  ],
  telegram: [
    { name: 'path', attrs: { d: 'M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.509 1.793.997 3.592 1.48 5.388.16.36.506.494.864.498l-.002.018s.281.028.555-.038a2.1 2.1 0 0 0 .933-.517c.345-.324 1.28-1.244 1.811-1.764l3.999 2.952.032.018s.442.311 1.09.355c.324.022.75-.04 1.116-.308.37-.27.613-.702.728-1.196.342-1.492 2.61-12.285 2.997-14.072l-.01.042c.27-1.006.17-1.928-.455-2.474a1.654 1.654 0 0 0-1.034-.407z' } },
  ],
  twitch: [
    { name: 'path', attrs: { d: 'M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7' }}
  ],
  twitter: [
    { name: 'path', attrs: { d: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' }}
  ],
  youtube: [
    { name: 'path', attrs: { d: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z' }},
    { name: 'polygon', attrs: { points: '9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02' } }
  ],
  email: [
    { name: 'path', attrs: { d: 'M7.79,9.16,2.48,3.85A2.49,2.49,0,0,1,3.75,3.5h12.5a2.49,2.49,0,0,1,1.27.35L12.21,9.16A3.13,3.13,0,0,1,7.79,9.16Z' }},
    { name: 'path', attrs: { d: 'M13.09,10.31,18.4,5a2.47,2.47,0,0,1,.35,1.27v7.5a2.5,2.5,0,0,1-2.5,2.5H3.75a2.5,2.5,0,0,1-2.5-2.5V6.27A2.47,2.47,0,0,1,1.6,5l5.31,5.31a4.37,4.37,0,0,0,6.18,0Z' }}
  ],
  dribbble: [
    { name: 'circle', attrs: { cx: 12.004, cy: 12, r: 9.39, 'paint-order': 'stroke fill markers'}, style: 'font-variation-settings:normal' },
    { name: 'path', attrs: { d: 'M5.858 19.136s2.343-5.79 8.161-6.422c5.818-.633 7.442.479 7.442.479M2.68 10.839s4.91.752 10.112-1.11c5.202-1.863 5.887-4.601 5.887-4.601', style: 'font-variation-settings:normal' }},
    { name: 'path', attrs: { d: 'M8.533 3.208s2.888 2.73 5.339 9.235c2.451 6.505 2.344 8.4 2.344 8.4' }, style: 'font-variation-settings:normal'}
  ],
  behance: [
    { name: 'path', attrs: { d: 'M1.774 18.063V5.466h5.51c1.978 0 3.116 1.326 3.055 2.806-.043 1.049-.711 2.988-2.643 2.988h-5.93H7.73c1.224 0 3.532 1.13 3.532 3.532 0 2.4-1.873 3.27-3.318 3.27zm12.57-4.459h7.89s.012-4.18-4.167-4.18c-5.237 0-5.277 9.11-.3 9.11 3.06 0 3.935-1.806 3.935-1.806M15.526 5.823h4.987', 'paint-order': 'stroke fill markers', 'stroke-linejoin': 'miter', 'stroke-width': 2 }, style: 'font-variation-settings:normal'}
  ],
  freepik: [
    { name: 'path', attrs: { d: 'M5.737 17.28s3.423.84 7.61.162c4.188-.676 6.862-2.57 6.862-2.57s.28 3.943-4.967 5.33c-5.248 1.388-8.543.657-9.506-2.923zm-.62-3.104s4.491 1.361 8.728.344c4.237-1.016 5.94-2.568 5.94-2.568s-1.81-6.448-7.405-5.648c-5.597.8-8.061 4.414-7.263 7.872z', 'stroke-linejoin': 'round' }, style: 'font-variation-settings:normal'},
    { name: 'path', attrs: { d: 'M1.265 12.607c.159-1.98.561-3.898 2.08-5.701m5.148-3.29c2.006-.66 3.968-1.157 6.446-.844m5.202 2.98c1.192 1.275 1.963 2.163 2.594 3.815', stroke: 'currentColor', 'stroke-linejoin': 'round' }, style: 'font-variation-settings:normal'},
    { name: 'circle', attrs: { cx: 14.746, cy: 10.404, r: .989, fill: 'currentColor', stroke: 'none'} },
    { name: 'circle', attrs: { cx: 9.637, cy: 11.305, r: 1.477, fill: 'currentColor', stroke: 'none'} }
  ],
  adobestock: [
    { name: 'path', attrs: { d: 'M2.235 2.235h19.53v19.53H2.235z', style: 'font-variation-settings:normal' }},
    { name: 'path', attrs: { d: 'M6.165 16.659s3.16 1.2 4.602-.17c1.37-1.3.787-3.163-.754-4.05-1.68-.969-3.284-1.788-3.036-3.536.446-3.138 4.386-1.851 4.386-1.851M15.792 7.794v7.774c0 1.023.635 1.766 2.043 1.624M17.826 10.04h-3.582' }, style: 'font-variation-settings:normal'}
  ],
  shutterstock: [
    { name: 'rect', attrs: { x: 2, y: 2, rx: 5, ry: 5, width: 20, height: 20 } },
    { name: 'path', attrs: { d: 'M7.728 11.725V9.032c0-1.025.824-1.85 1.849-1.85h2.815m3.88 5.093v2.693a1.845 1.845 0 0 1-1.849 1.85h-2.815', 'stroke-linecap': 'square', 'stroke-linejoin': 'miter' }}
  ],
  '123rf': [
    { name: 'path', attrs: { d: 'M7.48 3.826c-.702 0-1.345.388-1.675 1.008l-.711 1.334a4.214 4.214 0 0 1-1.614 1.67l-.388.224a2.207 2.207 0 0 0-1.104 1.913v8.607c0 .878.712 1.592 1.59 1.592h1.186c.468 0 .916-.19 1.244-.524l1.478-1.504c.266-.27.628-.421 1.006-.421h7.04c.378 0 .74.151 1.005.421l1.478 1.504c.329.334.778.524 1.247.524h1.183c.879 0 1.592-.714 1.592-1.592V9.975c0-.79-.422-1.518-1.106-1.912l-.388-.225a4.214 4.214 0 0 1-1.613-1.67l-.711-1.334a1.899 1.899 0 0 0-1.676-1.008z', 'stroke-linejoin': 'miter' }, style: "font-variation-settings:normal"},
    { name: 'circle', attrs: { cx: 9.637, cy: 11.305, r: 1.477, fill: 'currentColor', stroke: 'none'} }
  ],
  dreamstime: [
    { name: 'path', attrs: { d: 'M19.834 20.994s4.824-4.08 2.044-12.03C19.252 1.456 6.822-1.223 2.508 7.566c-3.936 8.023 2.18 14.46 7.88 14.374 4.889-.075 8.475-3.226 7.813-8.604-.76-6.18-6.73-6.816-9.275-4.184-2.256 2.334-1.816 7.034.873 7.823 2.241.844 4.661-1.265 3.161-3.215', stroke: "currentColor", 'stroke-linejoin': 'bevel', 'paint-order': "stroke fill markers" }, style: "font-variation-settings:normal"},
  ],
  paypal: [
    { name: 'path', attrs: { d: 'M7.144 19.532l1.049-5.751c.11-.606.691-1.002 1.304-.948 2.155.192 6.877.1 8.818-4.002 2.554-5.397-.59-7.769-6.295-7.769H7.43a1.97 1.97 0 0 0-1.944 1.655L2.77 19.507a.857.857 0 0 0 .846.994h2.368a1.18 1.18 0 0 0 1.161-.969zM7.967 22.522a.74.74 0 0 0 .666.416h2.313c.492 0 .923-.351 1.003-.837l.759-4.601c.095-.523.597-.866 1.127-.819 1.86.166 5.567-.118 6.85-3.821.554-1.6.705-2.954.408-4.018', stroke: "currentColor", 'stroke-linejoin': 'miter' }, style: "font-variation-settings:normal"},
  ],
  link: [
    { name: 'path', attrs: { d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' } },
    { name: 'path', attrs: { d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' } }
  ],
  home: [
    { name: 'path', attrs: { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' } },
    { name: 'polyline', attrs: { points: '9 22 9 12 15 12 15 22' } }
  ],
  archives: [
    { name: 'polyline', attrs: { points: '21 8 21 21 3 21 3 8' } },
    { name: 'rect', attrs: { x: 1, y: 3, width: 22, height: 5 } },
    { name: 'line', attrs: { x1: 10, y1: 12, x2: 14, y2: 12 } }
  ],
  menu: [
    { name: 'line', attrs: { x1: 3, y1: 12, x2: 21, y2: 12 } },
    { name: 'line', attrs: { x1: 3, y1: 6, x2: 21, y2: 6} },
    { name: 'line', attrs: { x1: 3, y1: 18, x2: 21, y2: 18 } }
  ],
  'chevron-left': [
    { name: 'path', attrs: { d: 'M5.5 3L7 4.5 3.25 8 7 11.5 5.5 13l-5-5 5-5z', 'fill-rule': 'evenodd' } }
  ],
  'chevron-right': [
    { name: 'path', attrs: { d: 'M7.5 8l-5 5L1 11.5 4.75 8 1 4.5 2.5 3l5 5z', 'fill-rule': 'evenodd' } }
  ],
  anchor: [
    { name: 'path', attrs: { d: 'M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3' } },
    { name: 'line', attrs: { x1: 8, y1: 12, x2: 16, y2: 12 } }
  ],
  tag: [
    { name: 'path', attrs: { d: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z' } },
    { name: 'line', attrs: { x1: 7, y1: 7, x2: 7, y2: 7 } }
  ],
  'file-text': [
    { name: 'path', attrs: { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' } },
    { name: 'polyline', attrs: { points: '14 2 14 8 20 8' } },
    { name: 'line', attrs: { x1: 16, y1: 13, x2: 8, y2: 13 } },
    { name: 'line', attrs: { x1: 16, y1: 17, x2: 8, y2: 17 } },
    { name: 'polyline', attrs: { points: '10 9 9 9 8 9' } }
  ],
  calendar: [
    { name: 'rect', attrs: { x: 3, y: 4, width: 18, height: 18, rx: 2, ry: 2 } },
    { name: 'line', attrs: { x1: 16, y1: 2, x2: 16, y2: 6 } },
    { name: 'line', attrs: { x1: 8, y1: 2, x2: 8, y2: 6 } },
    { name: 'line', attrs: { x1: 3, y1: 10, x2: 21, y2: 10 } }
  ],
  list: [
    { name: 'line', attrs: { x1: 8, y1: 6, x2: 21, y2: 6 } },
    { name: 'line', attrs: { x1: 8, y1: 12, x2: 21, y2: 12 } },
    { name: 'line', attrs: { x1: 8, y1: 18, x2: 21, y2: 18 } },
    { name: 'line', attrs: { x1: 3, y1: 6, x2: 3, y2: 6 } },
    { name: 'line', attrs: { x1: 3, y1: 12, x2: 3, y2: 12 } },
    { name: 'line', attrs: { x1: 3, y1: 18, x2: 3, y2: 18 } },
  ],
  image: [
    { name: 'rect', attrs: { x: 3, y: 3, width: 18, height: 18, rx: 2, ry: 2 } },
    { name: 'circle', attrs: { cx: 8.5, cy: 8.5, r: 1.5} },
    { name: 'polyline', attrs: { points: '21 15 16 10 5 21' } }
  ],
  'arrow-left': [
    { name: 'line', attrs: { x1: 19, y1: 12, x2: 5, y2: 12 } },
    { name: 'polyline', attrs: { points: '12 19 5 12 12 5' } }
  ],
  'arrow-right': [
    { name: 'line', attrs: { x1: 5, y1: 12, x2: 19, y2: 12 } },
    { name: 'polyline', attrs: { points: '12 5 19 12 12 19' } }
  ],
  'nav-home': [
    { name: 'path', attrs: { d: 'M15,9.9V8A5,5,0,0,0,5,8V9.9c-2.41.45-4,1.24-4,2.13,0,1.41,4,2.56,9,2.56s9-1.15,9-2.56C19,11.14,17.41,10.35,15,9.9Zm-2,.94a9.62,9.62,0,0,1-3,.39,9.62,9.62,0,0,1-3-.39V8a3,3,0,0,1,6,0Z' } },
    { name: 'path', attrs: { d: 'M2.74,14.6l3,2.12a7.39,7.39,0,0,0,8.6,0l3-2.12a24.63,24.63,0,0,1-7.26,1A24.63,24.63,0,0,1,2.74,14.6Z' } },
    { name: 'circle', attrs: { cx: 16, cy: 4, r: 4, fill: 'none'} },
    { name: 'circle', attrs: { cx: 16, cy: 4, r: 3, fill: 'none'} },
  ],
  'nav-expand': [
    { name: 'path', attrs: { d: 'M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85' } },
  ],
  'nav-expand-open': [
    { name: 'path', attrs: { d: 'M17.65,1.58H2.35A2.29,2.29,0,0,0,0,3.82V16.17a2.3,2.3,0,0,0,2.35,2.25h15.3A2.29,2.29,0,0,0,20,16.18V3.82A2.29,2.29,0,0,0,17.65,1.58Zm1.17,14.2a1.59,1.59,0,0,1-1.58,1.59H5.59V2.63H17.24a1.59,1.59,0,0,1,1.59,1.59Z' } },
    { name: 'path', attrs: { d: 'M15.9,9.37H9.84l2.71-2.71a.63.63,0,0,0-.89-.9L7.87,9.55a.6.6,0,0,0-.14.21.66.66,0,0,0,0,.48.6.6,0,0,0,.14.21l3.79,3.78a.63.63,0,0,0,.89-.89L9.84,10.63H15.9a.63.63,0,0,0,0-1.26Z' } },
  ],
  'nav-popular': [
    { name: 'polygon', attrs: { points: '12.5 3.5 20 3.5 20 11 17.5 8.5 11.25 14.75 7.5 11 2.5 16 0 13.5 7.5 6 11.25 9.75 15 6' } }
  ],
  'search': [
    { name: 'path', attrs: { d: 'M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z' } },
  ]
}

const SvgIcon = ({ svg = {}, type = 'link', className }) => {
  Object.assign(svgAttrs, svg)
  const props = svgProps[type]

  return (
    <svg {...svgAttrs} className={className}>
      {props.map((prop, index) => {
        const CustomTag = prop.name
        return (<CustomTag {...prop.attrs} key={`${CustomTag}-${index}`} />)
      })}
    </svg>
  )
}

export default SvgIcon