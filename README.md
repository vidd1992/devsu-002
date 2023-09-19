# DEVSU

## Documentación

### Gráfico general del sistema

- https://github.com/vidd1992/devsu-002/blob/master/images-documentacion/diagrama.jpeg

### 1) Dockerizar la aplicación

- env vars: Se ha implementado el uso de variables de entorno mismo que para el desarrollo se usa el archivo .env pero no se sube al repositorio, esta información se encuentra en un secret en el ambiente de kubernetes
- Port: se puede implementar de igual manera y agregar como un secret en kubernetes dependiendo de la necesidad de la misma.
- HealtCheck: se encuentra agregado un servicio que permita validar el healt mismo que en el archivo del pod de kubernetes se encuentra configurado
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF
-

### 2) Pipelines con Github Actions

> Note: En el diagrama se encuentra jenkins o aws codebuild como opcional ya que dependiendo de la necesidad de la arquitectura estos son vitales para mantener ordenado el proceso.

- Construción de la imagen
- Test unitarios (Mismos que ya tenia la aplicación además de incluir un test para el healtcheck)
- Análisis de código: Se ha implementado el módulo eslint mismo que en el pipeline al obtener varios errores se ha colocado continue-on-error: true para continuar el proceso
- Construir y subir la imagen: Se despliega en un dockerhub personal como imagen pública con el tag del hash de github para poder reconocer las diferentes imagenes.

## 3)Kubernetes

- Para completar el CI/CD hemos incluido la instalación de aws cli y kubectl para la comunicación con el clúster
- Para poder cambiar la imagen con la nueva versión desplegada se ha implementado
- > Note: `sed -i `que nos permite cambiar el tag para el despliegue del docker y cambiar el tag del archivo deployment para el despliegue en el clúster

En el paquete devsu.rar se encuentra los archivos
| Archivo | Detalle |
| ------ | ------ |
|devsuprueba-secret.yaml | Información sensible del contenedor|
|hpa.yaml| Para el escalamiento horizontal|
|ingres.yaml| Configurar el balanceador para el despliegue de esta api|
|namespaces.yaml| Para el despliegue del espacio de nombres |
|pod.yaml | Mismo que también se encuentra en el repositorio con el nombre devsuprueba_deployment.yaml|
|service.yaml|Para el despliegue del servicio del pod|

## 3)Terraform

- Se encuentra el archivo main.tf y outputs.tf mismo que permite desplegar toda el clúster de kubernetes
- Para el despliegue del balanceador de carga se ha implementado en base a la siguiente documentación.
  sh
  https://docs.aws.amazon.com/eks/latest/userguide/aws-load-balancer-controller.html

## 4) Url del servicio

sh
http://k8s-devsupru-devsupru-c002d69383-309554265.us-east-2.elb.amazonaws.com/
