# Node.js Backend Landscape

API para obtener actividades

## Requisitos

- Node.js instalado en tu máquina.

## Instalación

1. Clonar este repositorio:

   ```git clone git@github.com:francooluna1/backend-landscape.git ```

2. Ingresar al directorio del proyecto:

    ```cd backend-landscape ```

3. Instalar las dependencias:

    ```npm install ```

4. Iniciar la aplicacion:

    ``` node app.js ```

5. Para ver la solicitud GET debe ingresar a la siguiente URL:

``` http://localhost:3000/getActivities ```

6. Le devolvera el siguiente JSON:
```
[
    {
      activityId: 1,
      title: 'Subida al cerro catedral',
      type: 'ACTIVITY',
      startDate: '2023-10-12 01:30:00',
      endDate: '2023-10-12 23:30:00',
      status: 'IN_PROGRESS',
    },
    {
      activityId: 2,
      title: 'Fiesta de espuma',
      type: 'PARTY',
      startDate: '2023-10-13 01:30:00',
      endDate: '2023-10-13 23:30:00',
      status: 'DONE',
    },
    {
      activityId: 3,
      title: 'Desayuno',
      type: 'FOOD',
      startDate: null,
      endDate: null,
      status: null,
    },
    {
      activityId: 4,
      title: 'Cena',
      type: 'FOOD',
      startDate: '2023-10-14 22:00:00',
      endDate: '2023-10-14 23:00:00',
      status: null,
    },
    {
      activityId: 5,
      title: 'Futbol',
      type: 'ACTIVITY',
      startDate: '2023-10-12 14:00:00',
      endDate: '2023-10-12 15:00:00',
      status: 'IN_PROGRESS',
    },
    {
      activityId: 6,
      title: 'Salida al parque',
      type: 'ACTIVITY',
      startDate: '2023-10-13 08:23:00',
      endDate: '2023-10-13 10:17:00',
      status: null,
    },
  ]
```




