# Implementación de Formulario de Contacto con n8n

## 📋 Resumen
Este documento describe cómo reemplazar el formulario de contacto actual por uno que utilice n8n como backend, eliminando la necesidad de un servidor propio y credenciales de email pre-configuradas.

## 🎯 Objetivos
- Eliminar dependencia de backend propio
- Simplificar el envío de emails de contacto
- Aprovechar la potencia de n8n para automatización
- Mantener funcionalidad completa del formulario

## 🔧 Implementación

### 1. Configuración en n8n

#### 1.1 Crear Workflow
1. Acceder a tu instancia de n8n
2. Crear nuevo workflow: `Formulario Contacto Portfolio`
3. Configurar los siguientes nodos:

#### 1.2 Nodos del Workflow

**Nodo 1: Webhook (Trigger)**
```json
{
  "name": "Webhook Contacto",
  "type": "n8n-nodes-base.webhook",
  "parameters": {
    "httpMethod": "POST",
    "path": "formulario-contacto",
    "responseMode": "responseNode"
  }
}
```

**Nodo 2: Set (Procesar Datos)**
```json
{
  "name": "Formatear Datos",
  "type": "n8n-nodes-base.set",
  "parameters": {
    "values": {
      "string": [
        {
          "name": "asunto",
          "value": "Nuevo mensaje desde Portfolio - {{ $json.asunto }}"
        },
        {
          "name": "cuerpo",
          "value": "Nombre: {{ $json.nombre }}\nEmail: {{ $json.email }}\nAsunto: {{ $json.asunto }}\nMensaje:\n{{ $json.mensaje }}\n\nEnviado el: {{ $json.timestamp }}"
        }
      ]
    }
  }
}
```

**Nodo 3: Email (Enviar)**
```json
{
  "name": "Enviar Email",
  "type": "n8n-nodes-base.emailSend",
  "parameters": {
    "fromEmail": "tu-email@gmail.com",
    "toEmail": "martindigeronimo93@gmail.com",
    "subject": "{{ $json.asunto }}",
    "text": "{{ $json.cuerpo }}"
  }
}
```

**Nodo 4: Respond to Webhook (Respuesta)**
```json
{
  "name": "Respuesta Exitosa",
  "type": "n8n-nodes-base.respondToWebhook",
  "parameters": {
    "respondWith": "json",
    "responseBody": {
      "success": true,
      "message": "Mensaje enviado correctamente"
    }
  }
}
```

#### 1.3 Configuración de Email
- Configurar credenciales SMTP en n8n
- Usar Gmail SMTP o servicio de email preferido
- Configurar autenticación OAuth2 si es necesario

### 2. Modificaciones en React (src/App.jsx)

#### 2.1 Estados del Formulario
```javascript
const [formData, setFormData] = useState({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: ''
});
const [formStatus, setFormStatus] = useState({
  loading: false,
  success: false,
  error: false,
  message: ''
});
```

#### 2.2 URL del Webhook
```javascript
const WEBHOOK_URL = 'https://tu-n8n-instance.com/webhook/formulario-contacto';
```

#### 2.3 Función de Envío
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus({ loading: true, success: false, error: false, message: '' });

  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
      })
    });

    const result = await response.json();

    if (response.ok && result.success) {
      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Mensaje enviado correctamente. Te responderé pronto.'
      });
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    } else {
      throw new Error(result.message || 'Error al enviar mensaje');
    }
  } catch (error) {
    setFormStatus({
      loading: false,
      success: false,
      error: true,
      message: 'Error al enviar el mensaje. Inténtalo de nuevo.'
    });
  }
};
```

#### 2.4 Validación del Formulario
```javascript
const validateForm = () => {
  const { nombre, email, asunto, mensaje } = formData;
  return nombre.trim() && email.trim() && asunto.trim() && mensaje.trim() && 
         email.includes('@');
};
```

#### 2.5 Componente de Formulario Actualizado
```jsx
<form onSubmit={handleSubmit} className="space-y-6">
  {/* Campos del formulario existentes */}
  
  {/* Estado del formulario */}
  {formStatus.message && (
    <div className={`p-4 rounded-lg ${
      formStatus.success ? 'bg-green-500/20 text-green-300' : 
      formStatus.error ? 'bg-red-500/20 text-red-300' : 
      'bg-blue-500/20 text-blue-300'
    }`}>
      {formStatus.message}
    </div>
  )}
  
  {/* Botón de envío */}
  <button 
    type="submit" 
    disabled={!validateForm() || formStatus.loading}
    className="w-full button-primary inline-flex items-center justify-center gap-2 disabled:opacity-50"
  >
    {formStatus.loading ? (
      <>
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
        Enviando...
      </>
    ) : (
      <>
        <Send size={18} />
        Enviar Mensaje
      </>
    )}
  </button>
</form>
```

### 3. Configuración de Variables de Entorno

#### 3.1 Archivo .env
```env
VITE_N8N_WEBHOOK_URL=https://tu-n8n-instance.com/webhook/formulario-contacto
```

#### 3.2 Uso en el Código
```javascript
const WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL;
```

### 4. Consideraciones de Seguridad

#### 4.1 Validación en n8n
- Validar campos requeridos
- Sanitizar inputs
- Implementar rate limiting
- Log de intentos de envío

#### 4.2 Validación en Frontend
- Validación de email
- Campos requeridos
- Longitud máxima de mensaje
- Prevención de spam básica

### 5. Testing

#### 5.1 Pruebas del Webhook
```bash
curl -X POST https://tu-n8n-instance.com/webhook/formulario-contacto \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Test",
    "email": "test@example.com",
    "asunto": "Prueba",
    "mensaje": "Mensaje de prueba",
    "timestamp": "2025-01-15T10:00:00Z"
  }'
```

#### 5.2 Pruebas del Frontend
- Envío exitoso
- Manejo de errores
- Validación de campos
- Estados de loading

### 6. Monitoreo y Logs

#### 6.1 En n8n
- Activar logs de ejecución
- Configurar alertas de error
- Monitorear uso del webhook

#### 6.2 En Frontend
- Log de errores de red
- Métricas de uso del formulario
- Feedback de usuarios

## 🚀 Despliegue

### 1. Actualizar n8n
- Activar el workflow
- Probar webhook
- Configurar credenciales de email

### 2. Actualizar Portfolio
- Implementar cambios en React
- Probar formulario localmente
- Desplegar a GitHub Pages

### 3. Verificación Post-Despliegue
- Probar formulario en producción
- Verificar recepción de emails
- Monitorear logs

## 📝 Notas Adicionales

- El webhook debe estar activo antes del despliegue
- Considerar implementar CAPTCHA para prevenir spam
- Backup de configuración de n8n
- Documentar URL del webhook para futuras referencias

## 🔄 Mantenimiento

- Revisar logs periódicamente
- Actualizar credenciales de email si es necesario
- Monitorear uso y rendimiento
- Considerar mejoras futuras (notificaciones, base de datos, etc.)
