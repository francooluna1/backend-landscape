# Node.js Backend para Prueba en Landscape

API para obtener actividades

## Requisitos

- Node.js instalado en tu máquina.

## Instalación

1. Clonar este repositorio:

   ```git clone https://github.com/tu-usuario/tu-repositorio.git ```

2. Ingresar al directorio del proyecto:

    ```cd back-landscape ```

3. Instalar las dependencias:

    ```npm install ```

4. Inciar el servidor:

    ``` node app.js ```

5. Para ver la solicitud GET debe ingresar a la siguiente URL:

``` http://localhost:3000/getActivities ```

6. Le devolvera el siguiente JSON:
```
[
  {
    "activityId": 1,
    "title": "Subida al cerro catedral",
    "type": "ACTIVITY",
    "startDate": "2022-01-22 01:30:00",
    "endDate": "2022-01-22 23:30:00",
    "status": "IN_PROGRESS"
  },
  {
    "activityId": 2,
    "title": "Fiesta de espuma",
    "type": "PARTY",
    "startDate": "2022-01-22 01:30:00",
    "endDate": "2022-01-22 23:30:00",
    "status": "DONE"
  },
  {
    "activityId": 3,
    "title": "Desayuno",
    "type": "FOOD",
    "startDate": null,
    "endDate": null,
    "status": null
  }
]
```




