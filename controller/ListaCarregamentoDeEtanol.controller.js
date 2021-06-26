sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"../utils",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent"
], function(Controller, Filter, utils, JSONModel, History, UIComponent) {
	"use strict";

	return Controller.extend("sap.gestlog.plataforma.controller.ListaCarregamentoDeEtanol", {

		onNavBack: function () {

			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("cockpit", {}, true);
			}

		},

		onAtualizarConsulta: function() {
			// utils.warningDialog("Consulta atualizada com sucesso!!!", "Atualizar Consulta");

			var oView        = this.getView();
			var oModel       = null;
			var Pendentes    = [];
			var Pendente     = {};
			var Faturamentos = [];
			var Faturamento  = {};
			
			oModel = oView.getModel();
			
			if ((oModel === undefined) || (oModel === null)) {
				oModel = new JSONModel();
			}

			Pendente = {
				idCarregamento: "00001234",
				idTipoProduto: "2",
				descTipoProduto: "ETANOL",
				dataChegada: "08/03/2021",
				horaChegada: "08:10:10",
				placaCavalo: "SP GVU0730",
				transportadora: "Pinheiros Ltda ME",
				clientes: "Petrom Mogi Das Cruzes SA",
				quantidadeACarregar: "30,000",
				status: "1 - Recepção",
				materiais: "1000372"
			}; 

			Pendentes.push(Pendente);

			Pendente = {
				idCarregamento: "00001235",
				idTipoProduto: "2",
				descTipoProduto: "ETANOL",
				dataChegada: "08/03/2021",
				horaChegada: "08:10:10",
				placaCavalo: "SP GVU0730",
				transportadora: "Pinheiros Ltda ME",
				clientes: "Petrom Mogi Das Cruzes SA",
				quantidadeACarregar: "400,000",
				status: "1 - Recepção",
				materiais: "1000373"
			};

			Pendentes.push(Pendente);

			Pendente = {
				idCarregamento: "00001235",
				idTipoProduto: "2",
				descTipoProduto: "ETANOL",
				dataChegada: "08/03/2021",
				horaChegada: "08:10:10",
				placaCavalo: "SP GVU0730",
				transportadora: "Pinheiros Ltda ME",
				clientes: "Petrom Mogi Das Cruzes SA",
				quantidadeACarregar: "95,000",
				status: "1 - Recepção",
				materiais: "1000374"
			};
			
			Pendentes.push(Pendente);
			
			Pendente = {
				idCarregamento: "00001236",
				idTipoProduto: "2",
				descTipoProduto: "ETANOL",
				dataChegada: "08/03/2021",
				horaChegada: "08:10:10",
				placaCavalo: "SP GVU0730",
				transportadora: "Pinheiros Ltda ME",
				clientes: "Petrom Mogi Das Cruzes SA",
				quantidadeACarregar: "62,000",
				status: "1 - Recepção",
				materiais: "1000375"
			};

			Pendentes.push(Pendente);

			Pendente = {
				idCarregamento: "00001237",
				idTipoProduto: "2",
				descTipoProduto: "ETANOL",
				dataChegada: "08/03/2021",
				horaChegada: "08:10:10",
				placaCavalo: "SP GVU0730",
				transportadora: "Pinheiros Ltda ME",
				clientes: "Petrom Mogi Das Cruzes SA",
				quantidadeACarregar: "80,000",
				status: "1 - Recepção",
				materiais: "1000376"
			};

			Pendentes.push(Pendente);
			
			Faturamento = {
				idCarregamento: "00001234",
				idTipoProduto: "2",
				descTipoProduto: "ETANOL",
				dataChegada: "08/03/2021",
				horaChegada: "08:10:10",
				placaCavalo: "SP GVU0730",
				transportadora: "Pinheiros Ltda ME",
				clientes: "Petrom Mogi Das Cruzes SA",
				quantidadeACarregar: "30,000",
				status: "3 - Expedir",
				materiais: "1000372"
			};

			Faturamentos.push(Faturamento);

			Faturamento = {
				idCarregamento: "00001235",
				idTipoProduto: "2",
				descTipoProduto: "ETANOL",
				dataChegada: "08/03/2021",
				horaChegada: "08:10:10",
				placaCavalo: "SP GVU0730",
				transportadora: "Pinheiros Ltda ME",
				clientes: "Petrom Mogi Das Cruzes SA",
				quantidadeACarregar: "400,000",
				status: "3 - Expedir",
				materiais: "1000373"
			};

			Faturamentos.push(Faturamento);

			Faturamento = {
				idCarregamento: "00001235",
				idTipoProduto: "2",
				descTipoProduto: "ETANOL",
				dataChegada: "08/03/2021",
				horaChegada: "08:10:10",
				placaCavalo: "SP GVU0730",
				transportadora: "Pinheiros Ltda ME",
				clientes: "Petrom Mogi Das Cruzes SA",
				quantidadeACarregar: "95,000",
				status: "3 - Expedir",
				materiais: "1000374"
			};

			Faturamentos.push(Faturamento);

			Faturamento = {
				idCarregamento: "00001236",
				idTipoProduto: "2",
				descTipoProduto: "ETANOL",
				dataChegada: "08/03/2021",
				horaChegada: "08:10:10",
				placaCavalo: "SP GVU0730",
				transportadora: "Pinheiros Ltda ME",
				clientes: "Petrom Mogi Das Cruzes SA",
				quantidadeACarregar: "62,000",
				status: "3 - Expedir",
				materiais: "1000375"
			};

			Faturamentos.push(Faturamento);

			Faturamento = {
				idCarregamento: "00001237",
				idTipoProduto: "2",
				descTipoProduto: "ETANOL",
				dataChegada: "08/03/2021",
				horaChegada: "08:10:10",
				placaCavalo: "SP GVU0730",
				transportadora: "Pinheiros Ltda ME",
				clientes: "Petrom Mogi Das Cruzes SA",
				quantidadeACarregar: "80,000",
				status: "3 - Expedir",
				materiais: "1000376"
			};

			Faturamentos.push(Faturamento);

			var oData = {
				Pendentes: Pendentes,
				Faturamentos: Faturamentos
			};

			oModel.setData(oData);
			oView.setModel(oModel);

		},

		onbtnRecepcionarCarregamentoAcucar: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("recebimentodeetanol");
		},

		onEditChecklistPendente: function(oEvent) {
			utils.navegaEtapaCarregamento(this, oEvent, 1);
		},

		onEditCarregamentoAFaturar: function(oEvent) {
			utils.navegaEtapaCarregamento(this, oEvent, 2);
		}

	});
});