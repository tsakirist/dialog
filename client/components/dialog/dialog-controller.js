class DialogController {

    // Object includes the available options injected from mainController
    constructor($scope, $mdDialog, object) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
        this.selectedSensors = [];
        this.selectedReadingTypes = [];
        this.object = object;
        this.startDate = object.date.startDate === undefined ? new Date() : object.date.startDate;
        this.endDate = object.date.endDate === undefined ? new Date() : object.date.endDate;
    }

    getSelectedExportType() {
        return this.selectedExportType;
    }

    getSelectedReadingTypes() {
        return this.selectedReadingTypes;
    }

    getRadio() {
        return this.radio;
    }

    getSelectedSensors() {
        return this.selectedSensors;
    }

    getStartDate() {
        return this.startDate;
    }

    getEndDate() {
        return this.endDate;
    }

    getStartTime() {
        return this.startTime.toTimeString();
    }

    getEndTime() {
        return this.endTime.toTimeString();
    }

    addSensor(sensor) {
        const index = this.selectedSensors.indexOf(sensor);
        if(index > -1) {
            this.selectedSensors.splice(index, 1);
        }
        else {
            this.selectedSensors.push(sensor);
        }
    }

    clearReadingTypes() {
        this.selectedReadingTypes = undefined;
    }

    exportJson() {
        this.selectedSensors.sort((a, b) => {
            return a-b;
        });
        const json = {
            exportTypes : this.getSelectedExportType(),
            readingTypes : this.getSelectedReadingTypes()
        };
        if(this.getRadio() === 'All') {
            json.sensors = this.object.sensors;
        } else {
            json.sensors = this.getSelectedSensors();
        }
        json.date = {
            startDate: this.getStartDate(),
            endDate: this.getEndDate()
        };
        json.time = {
            startTime: this.getStartTime(),
            endTime: this.getEndTime()
        };
        this.dialogCancel();
        console.log(JSON.stringify(json));
    }

    hide() {
        this.$mdDialog.hide();
    }

    dialogCancel() {
        this.$mdDialog.cancel();
    }

}

DialogController.$inject = ['$scope', '$mdDialog', 'object'];
