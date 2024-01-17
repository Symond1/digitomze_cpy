const svgData = (data) => {
  return `
    <g transform="translate(0,190)" class="user">
            <text x="50%" y="0%" class="username" text-anchor="middle">${
              data.username
            }</text>
            <!-- <path
            d="M323 182C322.45 182 321.979 181.804 321.588 181.413C321.196 181.021 321 180.55 321 180V166C321 165.45 321.196 164.979 321.588 164.588C321.979 164.196 322.45 164 323 164H330V166H323V180H337V173H339V180C339 180.55 338.804 181.021 338.413 181.413C338.021 181.804 337.55 182 337 182H323ZM327.7 176.7L326.3 175.3L335.6 166H332V164H339V171H337V167.4L327.7 176.7Z" fill="white" /> -->
    </g>
    <g class="data">
        <g>
            <text transform="translate(-175,250)" x="50%" text-anchor="middle">${
            data.rating || "0"
            }</text>
        </g>
        <text transform="translate(-10,250)" x="50%" text-anchor="middle">${
        data.badge
        }</text>
        <text transform="translate(165,250)" x="50%" text-anchor="middle">${
        data.contests || "0"
        }</text>
    </g>
    `;
};
const svgWrapper = (width, height, x) => {
  return `<svg x="${x}" width="${width}" height="${height}" viewBox="0 0 491 363" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${svgStyle()}
    ${svgBackground()}`;
};
const svgStyle = () => {
  return `<style>
    .username {
        fill: #e4e4e4;
        font: 600 25px consolas;
    }

    .data {
        fill: #e4e4e4;
        font-size: 19px;
    }
</style>`;
};
const svgBackground = () => {
  return `<rect x="19" y="14" width="472" height="349" rx="30" fill="#D1E5F4" />
    <rect x="1.5" y="1.5" width="472" height="346" rx="28.5" fill="#252928" stroke="#D1E5F4" stroke-width="3" />`;
};
const svgBottom = () => {
  return `<g class="bottom">
    <g class="bottom-rectangles">
        <rect x="24.5" y="273.5" width="92" height="29" rx="14.5" stroke="#EBB376" />
        <rect x="192.5" y="273.5" width="92" height="29" rx="14.5" stroke="#2493F9" />
        <rect x="363.5" y="273.5" width="92" height="29" rx="14.5" stroke="#DE5753" />
    </g>
    <g class="buttons-text">
        <path
            d="M53.264 283.06C55.322 283.06 56.764 284.166 56.764 286.056C56.764 287.274 55.994 288.142 55.014 288.408C56.036 288.548 56.498 289.052 56.596 290.116L56.848 293H55.07L54.86 290.368C54.79 289.5 54.272 289.22 52.998 289.22H50.912V293H49.148V283.06H53.264ZM50.912 287.666H53.082C54.272 287.666 54.944 287.12 54.944 286.14C54.944 285.16 54.272 284.614 53.082 284.614H50.912V287.666ZM58.7453 287.834C59.0393 286.308 60.2293 285.412 62.0213 285.412C64.1493 285.412 65.2693 286.518 65.2693 288.59V291.18C65.2693 291.6 65.4373 291.712 65.7313 291.712H66.0113V293L65.5773 293.014C64.9753 293.014 63.8553 293 63.7433 291.866C63.3933 292.594 62.5673 293.168 61.2933 293.168C59.8093 293.168 58.6193 292.37 58.6193 291.054C58.6193 289.598 59.6973 289.136 61.4333 288.8L63.5193 288.38C63.5053 287.246 63.0293 286.7 62.0213 286.7C61.2233 286.7 60.7053 287.12 60.5233 287.932L58.7453 287.834ZM60.4113 290.998C60.4113 291.516 60.8453 291.922 61.7413 291.922C62.7773 291.922 63.5473 291.18 63.5473 289.668V289.598L62.1193 289.85C61.1533 290.032 60.4113 290.13 60.4113 290.998ZM68.0926 283.9H69.8286V285.58H71.7886V286.938H69.8286V290.746C69.8286 291.334 70.1086 291.628 70.6686 291.628H71.7886V293H70.4026C68.8906 293 68.0926 292.23 68.0926 290.746V286.938H66.9306V285.58H68.0926V283.9ZM73.7299 285.58H75.4659V293H73.7299V285.58ZM73.7019 284.53V283.06H75.5079V284.53H73.7019ZM77.814 285.58H79.382L79.438 286.798C79.83 285.818 80.67 285.412 81.664 285.412C83.316 285.412 84.198 286.574 84.198 288.226V293H82.462V288.772C82.462 287.512 82.126 286.826 81.16 286.826C80.152 286.826 79.55 287.512 79.55 288.772V293H77.814V285.58ZM89.2928 292.636C87.2768 292.636 85.9888 291.166 85.9888 289.08C85.9888 286.924 87.3048 285.412 89.2928 285.412C90.2448 285.412 91.0288 285.916 91.3928 286.714V285.58H93.0868V292.174C93.0868 294.134 91.6308 295.268 89.5448 295.268C87.8648 295.268 86.5908 294.428 86.1988 293.14L87.9768 293.028C88.2288 293.588 88.7748 293.924 89.5588 293.924C90.6788 293.924 91.3368 293.42 91.3368 292.412V291.446C90.9168 292.23 90.0908 292.636 89.2928 292.636ZM87.7808 289.066C87.7808 290.382 88.4808 291.32 89.6008 291.32C90.6928 291.32 91.3788 290.382 91.3928 289.066C91.4068 287.75 90.7208 286.826 89.6008 286.826C88.4668 286.826 87.7808 287.75 87.7808 289.066Z"
            fill="#EBB376" />
        <path
            d="M218.148 293V283.06H221.69C224.252 283.06 225.526 283.942 225.526 285.818C225.526 286.98 224.812 287.708 223.608 287.848C225.092 288.002 225.946 288.842 225.946 290.186C225.946 292.006 224.644 293 222.25 293H218.148ZM219.912 291.474H222.278C223.44 291.474 224.14 290.998 224.14 290.074C224.14 289.15 223.44 288.646 222.278 288.646H219.912V291.474ZM219.912 287.232H221.788C223.006 287.232 223.72 286.784 223.72 285.916C223.72 285.006 223.048 284.572 221.788 284.572H219.912V287.232ZM227.855 287.834C228.149 286.308 229.339 285.412 231.131 285.412C233.259 285.412 234.379 286.518 234.379 288.59V291.18C234.379 291.6 234.547 291.712 234.841 291.712H235.121V293L234.687 293.014C234.085 293.014 232.965 293 232.853 291.866C232.503 292.594 231.677 293.168 230.403 293.168C228.919 293.168 227.729 292.37 227.729 291.054C227.729 289.598 228.807 289.136 230.543 288.8L232.629 288.38C232.615 287.246 232.139 286.7 231.131 286.7C230.333 286.7 229.815 287.12 229.633 287.932L227.855 287.834ZM229.521 290.998C229.521 291.516 229.955 291.922 230.851 291.922C231.887 291.922 232.657 291.18 232.657 289.668V289.598L231.229 289.85C230.263 290.032 229.521 290.13 229.521 290.998ZM243.546 283.06V293H241.908L241.866 291.95C241.446 292.72 240.676 293.168 239.584 293.168C237.484 293.168 236.448 291.404 236.448 289.29C236.448 287.176 237.484 285.412 239.584 285.412C240.62 285.412 241.376 285.818 241.81 286.574V283.06H243.546ZM238.226 289.29C238.226 290.564 238.786 291.74 240.074 291.74C241.376 291.74 241.922 290.564 241.922 289.29C241.922 287.96 241.376 286.784 240.074 286.784C238.772 286.784 238.226 287.96 238.226 289.29ZM248.867 292.636C246.851 292.636 245.563 291.166 245.563 289.08C245.563 286.924 246.879 285.412 248.867 285.412C249.819 285.412 250.603 285.916 250.967 286.714V285.58H252.661V292.174C252.661 294.134 251.205 295.268 249.119 295.268C247.439 295.268 246.165 294.428 245.773 293.14L247.551 293.028C247.803 293.588 248.349 293.924 249.133 293.924C250.253 293.924 250.911 293.42 250.911 292.412V291.446C250.491 292.23 249.665 292.636 248.867 292.636ZM247.355 289.066C247.355 290.382 248.055 291.32 249.175 291.32C250.267 291.32 250.953 290.382 250.967 289.066C250.981 287.75 250.295 286.826 249.175 286.826C248.041 286.826 247.355 287.75 247.355 289.066ZM254.733 289.29C254.733 286.938 256.175 285.412 258.373 285.412C260.249 285.412 261.775 286.672 261.831 289.304V289.766H256.553C256.637 291.026 257.295 291.768 258.373 291.768C259.059 291.768 259.675 291.376 259.955 290.732L261.733 290.858C261.285 292.286 259.955 293.168 258.373 293.168C256.175 293.168 254.733 291.642 254.733 289.29ZM256.567 288.576H260.039C259.885 287.274 259.171 286.798 258.373 286.798C257.365 286.798 256.721 287.47 256.567 288.576Z"
            fill="#2492F9" />
        <path
            d="M388.492 289.724C388.086 291.81 386.644 293.224 384.292 293.224C381.38 293.224 379.616 290.956 379.616 288.044C379.616 285.118 381.38 282.836 384.292 282.836C386.518 282.836 387.974 284.166 388.436 286.154L386.602 286.252C386.322 285.132 385.524 284.39 384.278 284.39C382.304 284.39 381.436 286.028 381.436 288.044C381.436 290.046 382.318 291.67 384.278 291.67C385.58 291.67 386.392 290.83 386.644 289.626L388.492 289.724ZM393.697 293.168C391.499 293.168 390.057 291.642 390.057 289.29C390.057 286.938 391.499 285.412 393.697 285.412C395.895 285.412 397.337 286.938 397.337 289.29C397.337 291.642 395.895 293.168 393.697 293.168ZM391.849 289.29C391.849 290.83 392.521 291.74 393.697 291.74C394.873 291.74 395.545 290.83 395.545 289.29C395.545 287.75 394.873 286.84 393.697 286.84C392.521 286.84 391.849 287.75 391.849 289.29ZM399.306 285.58H400.874L400.93 286.798C401.322 285.818 402.162 285.412 403.156 285.412C404.808 285.412 405.69 286.574 405.69 288.226V293H403.954V288.772C403.954 287.512 403.618 286.826 402.652 286.826C401.644 286.826 401.042 287.512 401.042 288.772V293H399.306V285.58ZM408.673 283.9H410.409V285.58H412.369V286.938H410.409V290.746C410.409 291.334 410.689 291.628 411.249 291.628H412.369V293H410.983C409.471 293 408.673 292.23 408.673 290.746V286.938H407.511V285.58H408.673V283.9ZM413.602 289.29C413.602 286.938 415.044 285.412 417.242 285.412C419.118 285.412 420.644 286.672 420.7 289.304V289.766H415.422C415.506 291.026 416.164 291.768 417.242 291.768C417.928 291.768 418.544 291.376 418.824 290.732L420.602 290.858C420.154 292.286 418.824 293.168 417.242 293.168C415.044 293.168 413.602 291.642 413.602 289.29ZM415.436 288.576H418.908C418.754 287.274 418.04 286.798 417.242 286.798C416.234 286.798 415.59 287.47 415.436 288.576ZM427.095 287.946C426.955 287.19 426.255 286.742 425.555 286.742C424.841 286.742 424.281 287.106 424.295 287.708C424.309 288.338 425.093 288.59 425.821 288.73C427.795 289.066 428.943 289.584 428.943 291.026C428.943 292.496 427.501 293.168 425.807 293.168C423.805 293.168 422.447 292.216 422.321 290.648L424.099 290.55C424.239 291.334 424.827 291.824 425.779 291.824C426.395 291.824 427.151 291.6 427.151 290.97C427.137 290.242 426.297 290.13 425.527 289.962C423.777 289.612 422.503 289.15 422.503 287.75C422.503 286.294 423.707 285.398 425.653 285.398C427.361 285.398 428.607 286.35 428.845 287.862L427.095 287.946ZM431.425 283.9H433.161V285.58H435.121V286.938H433.161V290.746C433.161 291.334 433.441 291.628 434.001 291.628H435.121V293H433.735C432.223 293 431.425 292.23 431.425 290.746V286.938H430.263V285.58H431.425V283.9ZM441.114 287.946C440.974 287.19 440.274 286.742 439.574 286.742C438.86 286.742 438.3 287.106 438.314 287.708C438.328 288.338 439.112 288.59 439.84 288.73C441.814 289.066 442.962 289.584 442.962 291.026C442.962 292.496 441.52 293.168 439.826 293.168C437.824 293.168 436.466 292.216 436.34 290.648L438.118 290.55C438.258 291.334 438.846 291.824 439.798 291.824C440.414 291.824 441.17 291.6 441.17 290.97C441.156 290.242 440.316 290.13 439.546 289.962C437.796 289.612 436.522 289.15 436.522 287.75C436.522 286.294 437.726 285.398 439.672 285.398C441.38 285.398 442.626 286.35 442.864 287.862L441.114 287.946Z"
            fill="#DE5753" />
    </g>
</g>`;
};

export { svgData, svgBottom, svgWrapper };
