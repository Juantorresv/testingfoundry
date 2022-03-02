sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "cl/arauco/mmlog/model/models",
        "sap/ui/model/json/JSONModel"
    ],
    function (UIComponent, Device, models, JSONModel) {
        "use strict";

        return UIComponent.extend("cl.arauco.mmlog.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                this.setupTestingModel();
                this.setupLaneNodes();
            },

            setupLaneNodes: function () {
                debugger;
                var oDataProcessFlowLanesAndNodes = {
                    nodes: [{
                        id: "1",
                        lane: "0",
                        title: "Solicitud Quiebre de Programa 10248",
                        titleAbbreviation: "SO 10248",
                        children: [20],
                        isTitleClickable: true,
                        state: 'Positive',
                        stateText: "Creación OK",
                        focused: true,
                        customContentText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                        texts: ["Comentario de 40 caracteres", "Fecha: 07-08-2021"]
                    }, {
                        id: "20",
                        lane: "1",
                        title: "Aprobador: Rosa Mora",
                        titleAbbreviation: "SO 10248",
                        children: [31],
                        state: 'Positive',
                        stateText: "OK Probado",
                        texts: ["Fecha: 08-08-2021"]
                    }, {
                        id: "31",
                        lane: "2",
                        title: "Aprobador: Alejandro Ávila",
                        titleAbbreviation: "SO 10248",
                        children: [32],
                        state: 'Positive',
                        stateText: "Pendinte por Aprobar",
                        texts: []
                    }, {
                        id: "32",
                        lane: "3",
                        title: "Aprobador: Alejandro Ávila",
                        titleAbbreviation: "SO 10248",
                        children: null,
                        stateText: ""
                    }],
                    lanes: [{
                        id: "0",
                        icon: "sap-icon://create-entry-time",
                        label: "Pedido Emitido",
                        fecha: "02-03-2022",
                        position: 0
                    }, {
                        id: "1",
                        icon: "sap-icon://shipping-status",
                        label: "Pedido enviado al Proveedor",
                        position: 1
                    }, {
                        id: "2",
                        icon: "sap-icon://activity-2",
                        label: "Pedido confirmado",
                        position: 2
                    }, {
                        id: "3",
                        icon: "sap-icon://supplier",
                        label: "Pedido entregado transporte",
                        position: 3
                    },{
                        id: "4",
                        icon: "sap-icon://map-2",
                        label: "Pedido en transito",
                        position: 4
                    },{
                        id: "5",
                        icon: "sap-icon://home",
                        label: "Pedido entregado destino final",
                        position: 5
                    },{
                        id: "6",
                        icon: "sap-icon://factory",
                        label: "Pedido recepcionado en planta",
                        position: 6
                    }
                ]
                };
                var oModelPf1 = new sap.ui.model.json.JSONModel();
                //var viewPf1 = this.getView();
                oModelPf1.setData(oDataProcessFlowLanesAndNodes);
                this.setModel(oModelPf1, "flow");
                //viewPf1.byId("processflow").updateModel();
            },

            setupTestingModel: function () {
                //********TRVLCORR01 - INICIO
			var oModAdjVal = new JSONModel({
				ItemsMaster: [{
					id: 0,
                    Fav: "sap-icon://favorite",
                    Via: "Marítimo",
                    Interlocutor: "Transp. Extranjero",
					OrderID: "4504237103",
                    Centro: "TS08",
                    Transporte: "Falta",
                    Incoterm: "EBP",
                    Proveedor: "39274 RELIPER COMERCIAL LTDA.",
                    OrgCompra: "MRO1",
                    Sociedad: "PANL",
                    GrupoComp: "MCM",
                    FechaEnt: "01.09.2018",
                    FechaDesp: "01.09.2018",
                    FechaEntPlant: "01.09.2018",
                    FechaEntProv: "01.09.2018",
					Prioridad: "Pendiente",
					Descrip:"Fuga tubería",
					FechSol: '22-03-2021',
                    OpeLog: 'Nombre Operador',
                    State: 'Success',
                    IconEntregas: 'sap-icon://document',
                    IconEntregasPed: 'sap-icon://factory',
                    TextPed: 'En planta',
                    Entregas: [{
                        EntregaId: "1230123",
                        Dato1: "Dato1",
                        Dato2: "Dato2",
                        Dato3: "Dato3",
                        Dato4: "Dato4",
                        Dato5: "Dato5",
                        Materiales: [{
                            Mat: "38487",
                            Texto: "ARAND,D/PRES",
                            Cant: 100,
                            CantSol: 70,
                            CantPend: 30,
                            FechEntre: "23.10.2022",
                            GrupoArt: "Arandelas",
                            Centro: "TS08",
                            Almacen: "Mat. y Reptos.",
                            Entrega: "1230123",
                            Pos: "10",
                            Urg: 'Normal'
                        },{
                            Mat: "999921",
                            Texto: "ARAND",
                            Cant: 100,
                            CantSol: 80,
                            CantPend: 20,
                            FechEntre: "23.10.2022",
                            GrupoArt: "Arandelas",
                            Centro: "TS08",
                            Almacen: "Mat. y Reptos.",
                            Entrega: "1230123",
                            Pos: "10",
                            Urg: 'Moderada'
                        }]
                    },{
                        EntregaId: "5546123",
                        Dato1: "Dato1",
                        Dato2: "Dato2",
                        Dato3: "Dato3",
                        Dato4: "Dato4",
                        Dato5: "Dato5"
                    }],
                    Material: [{
                        Mat: "38487",
                        Texto: "ARAND,D/PRES",
                        Cant: 100,
                        CantSol: 70,
                        CantPend: 30,
                        FechEntre: "23.10.2022",
                        GrupoArt: "Arandelas",
                        Centro: "TS08",
                        Almacen: "Mat. y Reptos.",
                        Pos: "10",
                        Entrega: "1230123",
                        Urg: 'Alta'
                    },{
                        Mat: "999921",
                        Texto: "ARAND",
                        Cant: 100,
                        CantSol: 80,
                        CantPend: 20,
                        FechEntre: "23.10.2022",
                        GrupoArt: "Arandelas",
                        Centro: "TS08",
                        Almacen: "Mat. y Reptos.",
                        Pos: "10",
                        Entrega: "1230123",
                        Urg: 'Moderada'
                    },{
                        Mat: "38462",
                        Texto: "PERNO,MAQ",
                        Cant: 100,
                        CantSol: 50,
                        CantPend: 50,
                        FechEntre: "23.10.2022",
                        GrupoArt: "Pernos y Tornill.",
                        Centro: "TS08",
                        Almacen: "Mat. y Reptos.",
                        Pos: "20",
                        Entrega: "5546123",
                        Urg: 'Alta'
                    },{
                        Mat: "54566",
                        Texto: "TORNILLO",
                        Cant: 100,
                        CantSol: 25,
                        CantPend: 75,
                        FechEntre: "23.10.2022",
                        GrupoArt: "Pernos y Tornill.",
                        Centro: "TS08",
                        Almacen: "Mat. y Reptos.",
                        Pos: "20",
                        Entrega: "5546123",
                        Urg: 'Normal'
                    },{
                        Mat: "77856",
                        Texto: "PERNO",
                        Cant: 100,
                        CantSol: 20,
                        CantPend: 80,
                        FechEntre: "23.10.2022",
                        GrupoArt: "Pernos y Tornill.",
                        Centro: "TS08",
                        Almacen: "Mat. y Reptos.",
                        Pos: "20",
                        Entrega: "5546123",
                        Urg: 'Alta'
                    },{
                        Mat: "71116",
                        Texto: "PERNO",
                        Cant: 100,
                        CantSol: 0,
                        CantPend: 100,
                        FechEntre: "23.10.2022",
                        GrupoArt: "Pernos y Tornill.",
                        Centro: "TS08",
                        Almacen: "Mat. y Reptos.",
                        Pos: "30",
                        Entrega: "",
                        Urg: 'Alta'
                    }]
				},{
					id: 0,
					OrderID: "4505434567",
                    Fav: "sap-icon://unfavorite",
                    Centro: "TS08",
                    Via: "Marítimo",
                    Interlocutor: "Transp. Extranjero",
                    Transporte: "Falta",
                    Incoterm: "EBP",
                    Proveedor: "39274 RELIPER COMERCIAL LTDA.",
                    OrgCompra: "MRO1",
                    Sociedad: "PANL",
                    GrupoComp: "MCM",
                    FechaEnt: "01.09.2018",
                    FechaDesp: "01.09.2018",
                    FechaEntPlant: "01.09.2018",
                    FechaEntProv: "01.09.2018",
					Prioridad: "Pendiente",
					Descrip:"Fuga tubería",
					FechSol: '22-03-2021',
                    OpeLog: 'Nombre Operador',
                    State: 'Warning',
                    IconEntregas: 'sap-icon://documents',
                    IconEntregasPed: 'sap-icon://map-2',
                    TextPed: 'En transito',
                    Material: [{
                        Mat: "38487",
                        Texto: "ARAND,D/PRES",
                        Cant: 100,
                        FechEntre: "23.10.2022",
                        Entrega: "1230123"
                    },{
                        Mat: "38462",
                        Texto: "PERNO,MAQ",
                        Cant: 71,
                        FechEntre: "23.10.2022",
                        Entrega: "5546123"
                    }]
				}],
				Operaciones: [{
					op: '0020',
					ptrab: 'E-TECDCS',
					cent: 8000,
					trabajo: 2,
					un: 'H',
					status: 'Abie.',
					text: 'Revisar Falla en tarjeta'
				}]
			});
			this.setModel(oModAdjVal, "TestModel");
			//********TRVLCORR01 - INICIO
            }
        });
    }
);