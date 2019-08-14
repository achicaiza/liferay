<%@page import="com.liferay.portal.kernel.util.PropsUtil"%>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>
<%@ taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %>
<%@ taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %>
<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>

<liferay-theme:defineObjects />

<portlet:defineObjects />


<script type="text/javascript">
    function start() {
        require([
            "dsg-calendar"
        ], function() {
            var documentPortlet = document.getElementById('calendar');
            angular.element(documentPortlet).append(angular.element('<base href="' + window.location.pathname + '" />'));
            angular.bootstrap(documentPortlet, ["MainApplication"]);
        }, function(reject) {
            console.log("start", reject);
        });

    }
    start();

</script>
<div id="calendar" ng-controller='dsgCalendar'>
    <div><input type="date" ng-model="date" ng-change="dateChanged()"></div>
    <div>Fin de semana: <b>{{isWeekEnd}}</b></div>
</div>
