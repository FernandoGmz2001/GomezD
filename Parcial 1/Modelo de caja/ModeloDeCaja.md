# Modelo de caja

Hay dos tipos de cajas: **cajas en bloque y cajas en línea.** Estas características se refieren al modo como se comporta la caja en términos de flujo de página y en relación con otras cajas de la página.
<br>
Si una caja se define como un **bloque**, se comportará de las maneras siguientes:

- La caja fuerza un salto de línea al llegar al final de la línea.
- La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que haya en su contenedor. En la mayoría de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará el 100% del espacio disponible.
- Se respetan las propiedades **width y height**.
- El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.
  <br>

Si una caja tiene una visualización externa de tipo **inline**, entonces:

- La caja **no fuerza** ningún salto de línea al llegar al final de la línea.
- Las propiedades **width y height**s no se aplican.
- Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en línea.
- Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en línea.

# Partes de una caja

- El contenido de la caja (o content box): El área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como **width y height.**
- El relleno de la caja (o padding box): El relleno es **espacio en blanco alrededor del contenido**; es posible controlar su tamaño usando la propiedad padding y otras propiedades relacionadas.
- El borde de la caja (o border box): El borde de la caja envuelve el contenido y el de relleno. Es posible controlar su tamaño y estilo utilizando la propiedad border y otras propiedades relacionadas.
- El margen de la caja (o margin box): El margen es la capa **más externa.** Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad margin y otras propiedades relacionadas.

![Imagen del modelo de cajas](https://saucedoinfo.github.io/guias/desarrollo/css/img/modelo-de-cajas.svg)
