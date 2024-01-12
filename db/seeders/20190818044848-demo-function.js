'use strict'

module.exports = {
	up: (queryInterface, Sequelize) => {

		return queryInterface.bulkInsert('Functions', [{
			parentId: null,
			title: 'Inicio',
			description: 'Inicio cliente',
			icon: 'home',
			iconM: 'home',
			urlIntranet: '/auth/client/dashboard',
			urlMobile: '/menu/dashboard-client',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: null,
			title: 'Inicio',
			description: 'Inicio prestador',
			icon: 'home',
			iconM: 'home',
			urlIntranet: '/auth/lender/dashboard',
			urlMobile: '/menu/dashboard-lender',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: null,
			title: 'Inicio',
			description: 'Inicio gerente',
			icon: 'home',
			urlIntranet: '/auth/admin/dashboard',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: null,
			title: 'Servicios',
			description: 'Servicios',
			icon: 'assignment_ind',
			iconM: 'clipboard',
			urlIntranet: '',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 4,
			title: 'Solicitar',
			description: 'Solicitar',
			icon: 'assignment',
			iconM: 'list-box',
			urlIntranet: '/auth/client/catalog',
			urlMobile: '/menu/services/catalogue',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 4,
			title: 'Atender',
			description: 'Atender solicitud',
			icon: 'check_circle',
			iconM: 'checkmark-circle',
			urlIntranet: '/auth/lender/request',
			urlMobile: '/menu/services/request-list',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 4,
			title: 'Diagnosticar',
			description: 'Diagnosticar',
			icon: 'assignment_late',
			iconM: 'list-box',
			urlIntranet: '/auth/lender/diagnosis',
			urlMobile: '/menu/services/diagnose-list',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 4,
			title: 'Presupuesto',
			description: 'Generar presupuesto',
			icon: 'receipt',
			urlIntranet: '/auth/lender/budget',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 4,
			title: 'Evaluar presupuesto',
			description: 'Evaluar presupuesto',
			icon: 'receipt',
			iconM: 'calculator',
			urlIntranet: '/auth/client/budget',
			urlMobile: '/menu/services/budget-list',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 4,
			title: 'Ejecutar',
			description: 'Ejecutar',
			icon: 'done',
			iconM: 'fastforward',
			urlIntranet: '/auth/lender/execute',
			urlMobile: '/menu/services/execute',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 4,
			title: 'Cerrar Servicio',
			description: 'Cerrar Servicio',
			icon: 'done_all',
			iconM: 'done-all',
			urlIntranet: '/auth/lender/delivery',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 4,
			title: 'Calificar',
			description: 'Calificar',
			icon: 'star_border',
			iconM: 'star',
			urlIntranet: '/auth/client/calification',
			urlMobile: '/menu/services/qualify-list',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: null,
			title: 'Reclamos',
			description: 'Reclamos',
			icon: 'sentiment_dissatisfied',
			iconM: 'sad',
			urlIntranet: '',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 13,
			title: 'Crear',
			description: 'Crear reclamo',
			icon: 'add_circle_outline',
			iconM: 'add-circle',
			urlIntranet: '/auth/client/claim',
			urlMobile: '/menu/claims',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 13,
			title: 'Atender',
			description: 'Atender reclamo',
			icon: 'check_circle',
			iconM: 'checkmark-circle',
			urlIntranet: '/auth/lender/claim',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: null,
			title: 'Promociones',
			description: 'Promociones',
			icon: 'card_giftcard',
			urlIntranet: '',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 16,
			title: 'Crear',
			description: 'Crear promoción',
			icon: 'add_circle_outline',
			urlIntranet: '/auth/admin/configurations/parameter/promotion',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 16,
			title: 'Difundir',
			description: 'Difundir promoción',
			icon: 'record_voice_over',
			urlIntranet: '/auth/admin/configurations/parameter/promotion/diffusion',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: null,
			title: 'Sugerencias',
			description: 'Sugerencias',
			icon: 'message',
			urlIntranet: '',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 19,
			title: 'Crear',
			description: 'Crear sugerencia',
			icon: 'add_circle_outline',
			iconM: 'add-circle',
			urlIntranet: '/auth/client/suggestion',
			urlMobile: '/menu/suggestions ',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 19,
			title: 'Atender',
			description: 'Atender sugerencia',
			icon: 'check_circle',
			iconM: 'checkmark-circle',
			urlIntranet: '/auth/lender/suggestion',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: null,
			title: 'Incidencias',
			description: 'Incidencias',
			icon: 'warning',
			iconM: 'warning',
			urlIntranet: '',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 22,
			title: 'Crear',
			description: 'Crear incidencia',
			icon: 'add_circle_outline',
			iconM: 'add-circle',
			urlIntranet: '/auth/lender/incidence',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 22,
			title: 'Atender',
			description: 'Atender incidencia',
			icon: 'check_circle',
			iconM: 'checkmark-circle',
			urlIntranet: '/auth/lender/incidence',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: null,
			title: 'Configuración',
			description: 'Configuración',
			icon: 'dashboard',
			urlIntranet: '',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 25,
			title: 'Web',
			description: 'Contenido portal web',
			icon: 'laptop',
			urlIntranet: '/auth/admin/configurations/company',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 25,
			title: 'Parámetros',
			description: 'Parámetros',
			icon: 'list_alt',
			urlIntranet: '',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 27,
			title: 'Clasificación de Servicios',
			description: 'Clasificación de Servicios',
			icon: 'assignment_turned_in',
			urlIntranet: '/auth/admin/configurations/catalog',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 27,
			title: 'Características de Servicios',
			description: 'Características de Servicios',
			icon: 'assignment_turned_in',
			urlIntranet: '/auth/admin/configurations/service',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 27,
			title: 'Genéricos',
			description: 'Genéricos',
			icon: 'assignment_turned_in',
			urlIntranet: '/auth/admin/configurations/parameter',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 25,
			title: 'Servicios',
			description: 'Servicios',
			icon: 'assignment_turned_in',
			urlIntranet: '/auth/admin/configurations/service-detail',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 25,
			title: 'Empleados',
			description: 'Empleados',
			icon: 'account_box',
			urlIntranet: '/auth/admin/configurations/lender',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: null,
			title: 'Administración del Sistema',
			description: 'Administración del Sistema',
			icon: 'settings_applications',
			urlIntranet: '',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 33,
			title: 'Seguridad Funcional',
			description: 'Seguridad Funcional',
			icon: 'lock',
			urlIntranet: '',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 34,
			title: 'Roles',
			description: 'Roles',
			icon: 'supervisor_account',
			urlIntranet: '/auth/admin/configurations/user-role/role',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 34,
			title: 'Permisos',
			description: 'Permisos',
			icon: 'supervisor_account',
			urlIntranet: '/auth/admin/configurations/user-role/function/create',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 34,
			title: 'Usuarios',
			description: 'Usuarios',
			icon: 'supervisor_account',
			urlIntranet: '/auth/admin/configurations/user-role/user',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 33,
			title: 'Base de Datos',
			description: 'Base de Datos',
			icon: 'cloud_circle',
			urlIntranet: '/auth/admin/backup',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: null,
			title: 'Reportes',
			description: 'Reportes',
			icon: 'assessment',
			urlIntranet: '',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 39,
			title: 'Estadísticos',
			description: 'Estadísticos',
			icon: 'assessment',
			urlIntranet: '/auth/admin/reportStatistical',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			parentId: 39,
			title: 'Estructurados',
			description: 'Estructurados',
			icon: 'assessment',
			urlIntranet: '/auth/admin/reportStructured',
			urlMobile: '',
			createdAt: new Date(),
			updatedAt: new Date()
		}, ], {});

	},

	down: (queryInterface, Sequelize) => {

		return queryInterface.bulkDelete('Functions', null, {});

	}
};
