varying vec3 vNormal;
varying vec3 vPosition;

uniform vec3 topColor;
uniform vec3 bottomColor;

void main() {
    float gradient = (vPosition.y + 1.0) / 2.0; // Map the y-coordinate to [0, 1]

    vec3 color = mix(bottomColor, topColor, gradient); // Mix the colors based on gradient

    gl_FragColor = vec4(color, 1.0);
}
