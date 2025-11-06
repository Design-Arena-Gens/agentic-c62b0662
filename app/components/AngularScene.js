'use client';

import { useState } from 'react';

const snippets = {
  controller: {
    label: 'Controller + Template',
    description: 'A playful snack tracker that shows two-way data binding, filters, and ng-repeat teaming up.',
    code: String.raw`// app.js
angular.module('snackQuest', [])
  .controller('SnackCtrl', function($scope) {
    $scope.hero = 'Nova';
    $scope.snacks = [
      { name: 'Nebula Nachos', spiciness: 2 },
      { name: 'Cosmic Cookies', spiciness: 0 },
      { name: 'Photon Fries', spiciness: 4 }
    ];

    $scope.addSnack = () => {
      if (!$scope.newSnack) return;
      $scope.snacks.push({ name: $scope.newSnack, spiciness: 1 });
      $scope.newSnack = '';
    };
  });

/* index.html */
<body ng-app="snackQuest" ng-controller="SnackCtrl">
  <h2>{{hero}}'s Snack Tracker</h2>
  <input ng-model="newSnack" placeholder="Add a snack" />
  <button ng-click="addSnack()">Add</button>

  <ul>
    <li ng-repeat="snack in snacks | orderBy:'spiciness'">
      {{snack.name}} <small>🔥 x {{snack.spiciness}}</small>
    </li>
  </ul>
</body>`
  },
  directive: {
    label: 'Custom Directive',
    description: 'A badge directive that pulls in ES6 features inside the link function for clarity.',
    code: String.raw`angular.module('snackQuest')
  .directive('rewardBadge', function() {
    return {
      restrict: 'E',
      scope: {
        hero: '@',
        level: '@'
      },
      template: \`<div class="badge">{{hero}} unlocked level {{level}}! 🛡️</div>\`,
      link(scope, element) {
        const levels = ['Bronze', 'Silver', 'Gold'];
        const current = Number(scope.level) || 0;
        element[0].style.border = '2px solid #f78ca0';
        element[0].title = \`Next stop: \${levels[(current + 1) % levels.length]}\`;
      }
    };
  });`
  },
  service: {
    label: 'Service + $http',
    description: 'Fetching space snacks with `$http` and returning a promise that controllers can groove with.',
    code: String.raw`angular.module('snackQuest')
  .service('SnackService', function($http) {
    const baseUrl = 'https://snacks.example/api';

    this.getSnacks = () => {
      return $http.get(\`\${baseUrl}/snacks\`)
        .then(response => response.data)
        .catch(error => {
          console.error('Snack distress! ', error);
          throw error;
        });
    };
  })
  .controller('SnackCtrl', function($scope, SnackService) {
    SnackService.getSnacks().then(snacks => {
      $scope.snacks = snacks;
    });
  });`
  }
};

export default function AngularScene() {
  const [activeKey, setActiveKey] = useState('controller');
  const activeSnippet = snippets[activeKey];

  return (
    <section className="section" id="angularjs">
      <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>AngularJS Scenes in Action</h2>
      <p className="muted" style={{ marginBottom: '24px', maxWidth: '720px' }}>
        Peek behind the curtain with annotated snippets balancing modern JavaScript style and classic AngularJS APIs.
        Toggle scenes to see controllers, directives, and services in their natural habitat.
      </p>
      <div style={{ display: 'flex', gap: '14px', marginBottom: '18px', flexWrap: 'wrap' }}>
        {Object.entries(snippets).map(([key, snippet]) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveKey(key)}
            className="badge"
            style={{
              background: activeKey === key ? 'rgba(248, 172, 107, 0.2)' : 'rgba(91, 141, 239, 0.12)',
              borderColor: activeKey === key ? 'rgba(248, 172, 107, 0.6)' : 'rgba(91, 141, 239, 0.4)',
              cursor: 'pointer'
            }}
          >
            {snippet.label}
          </button>
        ))}
      </div>
      <div className="gradient-border">
        <div style={{ padding: '26px', display: 'grid', gap: '16px' }}>
          <p className="muted" style={{ fontSize: '0.95rem' }}>{activeSnippet.description}</p>
          <pre className="code-block" style={{ margin: 0 }}>
            <code>{activeSnippet.code}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
