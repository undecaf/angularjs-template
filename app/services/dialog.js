"use strict";

/**
 * Dieses Service zeigt eine AngularJS-Komponente als modalen Dialog an.
 *
 * Die Komponente _muss_ folgendes Markup haben:
 *   <div class="md-dialog-container">
 *       <md-dialog flex="...">
 *           ...
 *       </md-dialog>
 *   </div>
 *
 * Um den Dialog anzuzeigen, ruft man (in beliebigen anderen Komponenten)
 * DialogService.show(...) auf. Diese Methode liefert ein Promise auf
 * das Schließen des Dialogs und die Eingabedaten.
 *
 * Um den Dialog zu schließen und Eingabedaten zu übergeben, ruft man
 * in der Dialog-Komponente die Methode DialogService.submit(...) auf.
 *
 * Mit DialogService.cancel(), Klicken außerhalb des Dialogs oder mit
 * ESC wird der Dialog geschlossen, und das Promise wird zurückgewiesen.
 */
app.service("DialogService", function ($mdDialog, $log) {

    $log.debug("DialogService()");


    /**
     * Zeigt die durch den CSS-Selektor ausgewählte Komponente in einem modalen
     * Dialog an und liefert ein Promise auf das Schließen des Dialogs und die
     * Eingabedaten.
     *
     * Den Dialog kann man durch DialogService.submit(), DialogService.cancel(),
     * Klicken außerhalb des Dialogs oder mittels ESC-Taste schließen.
     * 
     * Um das Standardverhalten des Dialogs abzuändern, kann man zusätzlich Optionen
     * übergeben, wie für $mdDialog.show() beschrieben.
     */
    this.show = (componentSelector, options) => {
        $log.debug("DialogService.show()", componentSelector, options);

        let component = angular.element(componentSelector);

        // Änderbare Optionen überschreiben, falls angegeben
        options = Object.assign(
            {
                clickOutsideToClose: true,
            },
            options,
            {
                parent: angular.element(document.body),
                contentElement: component.children()[0],
                controller: component.isolateScope().$ctrl
            });

        return $mdDialog
            .show(options)
            .then(result => {
                $log.debug("DialogService.show() result", result);

                return result ? Promise.resolve(result.data) : Promise.reject();
            });
    };


    /**
     * Schließt den modalen Dialog und erfüllt das Promise von DialogService.show()
     * mit den angegebenen Daten.
     */
    this.submit = (result) => {
        $log.debug("DialogService.submit()", result);

        $mdDialog.hide({ data: result });
    };


    /**
     * Schließt den modalen Dialog und weist das Promise von DialogService.show()
     * zurück.
     */
    this.cancel = (result) => {
        $log.debug("DialogService.cancel()", result);

        $mdDialog.hide();
    };

});
