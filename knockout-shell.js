// Generated by CoffeeScript 1.8.0
var ClassBindingProvider, Templater, ko, oldload, provider, templater, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require("underscore");

window.ko = ko = require("knockout");

require("knockout-classBindingProvider");

ClassBindingProvider = ko.classBindingProvider;

delete ko.classBindingProvider;

Object.defineProperty(Element.prototype, "ko_data", {
  get: function() {
    return ko.data_for(this);
  }
});

provider = ko.bindingProvider.instance = new ClassBindingProvider({}, {
  fallback: true,
  log: console.warn.bind(console)
});

ko.setTemplateEngine(templater = new (Templater = (function(_super) {
  __extends(Templater, _super);

  function Templater() {
    this.allowTemplateRewriting = false;
  }

  Templater.prototype.templates = {};

  Templater.prototype.template_data = {};

  Templater.prototype.makeTemplateSource = function(id) {
    return {
      data: (function(_this) {
        return function(key, val) {
          if (_this.template_data[id] == null) {
            _this.template_data[id] = {};
          }
          if (arguments.length === 1) {
            return _this.template_data[id][key];
          }
          return _this.template_data[id][key] = val;
        };
      })(this),
      text: (function(_this) {
        return function(val) {
          if (arguments.length) {
            return val;
          } else {
            return _this.templates[id];
          }
        };
      })(this)
    };
  };

  Templater.prototype.renderTemplateSource = function(source, ctx, options, doc) {
    var prec;
    prec = source.data("precompiled");
    if (prec == null) {
      prec = _.template("<%with($data){%>" + (source.text()) + "<%}%>");
      source.data("precompiled", prec);
    }
    return ko.utils.parseHtmlFragment(prec(ctx).replace(/\s+/g, " "), doc);
  };

  Templater.prototype.createJavaScriptEvaluatorBlock = function(script) {
    return "<%=" + script + "%>";
  };

  return Templater;

})(ko.nativeTemplateEngine)));

ko.register_bindings = provider.registerBindings.bind(provider);

ko.register_template = function(id, template) {
  return templater.templates[id] = template;
};

ko.root = ko.observable();

oldload = window.onload;

window.onload = function() {
  if (typeof oldload === "function") {
    oldload();
  }
  document.body.appendChild(document.createComment(" ko class: shell "));
  document.body.appendChild(document.createComment(" /ko "));
  ko.register_bindings({
    shell: function(ctx) {
      return ko.root();
    }
  });
  return ko.applyBindings({}, document.body);
};

module.exports = ko;

//# sourceMappingURL=knockout-shell.js.map
// Generated by CoffeeScript 1.8.0
var ClassBindingProvider, Templater, ko, oldload, provider, templater, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

_ = require("underscore");

window.ko = ko = require("knockout");

require("knockout-classBindingProvider");

ClassBindingProvider = ko.classBindingProvider;

delete ko.classBindingProvider;

Object.defineProperty(Element.prototype, "ko_data", {
  get: function() {
    return ko.data_for(this);
  }
});

provider = ko.bindingProvider.instance = new ClassBindingProvider({}, {
  fallback: true,
  log: console.warn.bind(console)
});

ko.setTemplateEngine(templater = new (Templater = (function(_super) {
  __extends(Templater, _super);

  function Templater() {
    this.allowTemplateRewriting = false;
  }

  Templater.prototype.templates = {};

  Templater.prototype.template_data = {};

  Templater.prototype.makeTemplateSource = function(id) {
    return {
      data: (function(_this) {
        return function(key, val) {
          if (_this.template_data[id] == null) {
            _this.template_data[id] = {};
          }
          if (arguments.length === 1) {
            return _this.template_data[id][key];
          }
          return _this.template_data[id][key] = val;
        };
      })(this),
      text: (function(_this) {
        return function(val) {
          if (arguments.length) {
            return val;
          } else {
            return _this.templates[id];
          }
        };
      })(this)
    };
  };

  Templater.prototype.renderTemplateSource = function(source, ctx, options, doc) {
    var prec;
    prec = source.data("precompiled");
    if (prec == null) {
      prec = _.template("<%with($data){%>" + (source.text()) + "<%}%>");
      source.data("precompiled", prec);
    }
    return ko.utils.parseHtmlFragment(prec(ctx).replace(/\s+/g, " "), doc);
  };

  Templater.prototype.createJavaScriptEvaluatorBlock = function(script) {
    return "<%=" + script + "%>";
  };

  return Templater;

})(ko.nativeTemplateEngine)));

ko.register_bindings = provider.registerBindings.bind(provider);

ko.register_template = function(id, template) {
  return templater.templates[id] = template;
};

ko.root = ko.observable();

oldload = window.onload;

window.onload = function() {
  if (typeof oldload === "function") {
    oldload();
  }
  document.body.appendChild(document.createComment(" ko class: shell "));
  document.body.appendChild(document.createComment(" /ko "));
  ko.register_bindings({
    shell: function(ctx) {
      return ko.root();
    }
  });
  return ko.applyBindings({}, document.body);
};

module.exports = ko;

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAiZmlsZSI6ICJrbm9ja291dC1zaGVsbC5qcyIs CiAgInNvdXJjZVJvb3QiOiAiIiwKICAic291cmNlcyI6IFsKICAgICJrbm9ja291 dC1zaGVsbC5jb2ZmZWUiCiAgXSwKICAibmFtZXMiOiBbXSwKICAibWFwcGluZ3Mi OiAiO0FBQ0EsSUFBQSxvRUFBQTtFQUFBO2lTQUFBOztBQUFBLENBQUEsR0FBSSxP QUFBLENBQVEsWUFBUixDQUFKLENBQUE7O0FBQUEsTUFFTSxDQUFDLEVBQVAsR0FB WSxFQUFBLEdBQUssT0FBQSxDQUFRLFVBQVIsQ0FGakIsQ0FBQTs7QUFBQSxPQUlB LENBQVEsK0JBQVIsQ0FKQSxDQUFBOztBQUFBLG9CQUtBLEdBQXVCLEVBQUUsQ0FB QyxvQkFMMUIsQ0FBQTs7QUFBQSxNQU9BLENBQUEsRUFBUyxDQUFDLG9CQVBWLENB QUE7O0FBQUEsTUFVTSxDQUFDLGNBQVAsQ0FBc0IsT0FBTyxDQUFBLFNBQTdCLEVB QWlDLFNBQWpDLEVBQTRDO0FBQUEsRUFBQSxHQUFBLEVBQUssU0FBQSxHQUFBO1dB QU8sRUFBRSxDQUFDLFFBQUgsQ0FBWSxJQUFaLEVBQVA7RUFBQSxDQUFMO0NBQTVD LENBVkEsQ0FBQTs7QUFBQSxRQWNBLEdBQVcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxR QUFuQixHQUNILElBQUEsb0JBQUEsQ0FBcUIsRUFBckIsRUFJQTtBQUFBLEVBQUEs UUFBQSxFQUFVLElBQVY7QUFBQSxFQUNBLEdBQUEsRUFBSyxPQUFPLENBQUMsSUFB SSxDQUFDLElBQWIsQ0FBa0IsT0FBbEIsQ0FETDtDQUpBLENBZlIsQ0FBQTs7QUFB QSxFQXVCRSxDQUFDLGlCQUFILENBQXFCLFNBQUEsR0FBWSxHQUFBLENBQUEsQ0FB VTtBQUV2Qyw4QkFBQSxDQUFBOztBQUFhLEVBQUEsbUJBQUEsR0FBQTtBQUNULElB QUEsSUFBQyxDQUFBLHNCQUFELEdBQTBCLEtBQTFCLENBRFM7RUFBQSxDQUFiOztB QUFBLHNCQUdBLFNBQUEsR0FBVyxFQUhYLENBQUE7O0FBQUEsc0JBSUEsYUFBQSxH QUFlLEVBSmYsQ0FBQTs7QUFBQSxzQkFNQSxrQkFBQSxHQUFvQixTQUFFLEVBQUYs R0FBQTtXQUNoQjtBQUFBLE1BQUEsSUFBQSxFQUFNLENBQUEsU0FBQSxLQUFBLEdB QUE7ZUFBQSxTQUFFLEdBQUYsRUFBTyxHQUFQLEdBQUE7QUFDRixVQUFBLElBQWdD LCtCQUFoQztBQUFBLFlBQUEsS0FBQyxDQUFBLGFBQWMsQ0FBQSxFQUFBLENBQWYs R0FBcUIsRUFBckIsQ0FBQTtXQUFBO0FBQ0EsVUFBQSxJQUFrQyxTQUFTLENBQUMs TUFBVixLQUFvQixDQUF0RDtBQUFBLG1CQUFPLEtBQUMsQ0FBQSxhQUFjLENBQUEs RUFBQSxDQUFJLENBQUEsR0FBQSxDQUExQixDQUFBO1dBREE7aUJBRUEsS0FBQyxD QUFBLGFBQWMsQ0FBQSxFQUFBLENBQUksQ0FBQSxHQUFBLENBQW5CLEdBQTBCLElB SHhCO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBTjtBQUFB LE1BSUEsSUFBQSxFQUFNLENBQUEsU0FBQSxLQUFBLEdBQUE7ZUFBQSxTQUFFLEdB QUYsR0FBQTtBQUNLLFVBQUEsSUFBRyxTQUFTLENBQUMsTUFBYjttQkFBeUIsSUFB ekI7V0FBQSxNQUFBO21CQUFrQyxLQUFDLENBQUEsU0FBVSxDQUFBLEVBQUEsRUFB N0M7V0FETDtRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBSk47 TUFEZ0I7RUFBQSxDQU5wQixDQUFBOztBQUFBLHNCQWNBLG9CQUFBLEdBQXNCLFNB QUUsTUFBRixFQUFVLEdBQVYsRUFBZSxPQUFmLEVBQXdCLEdBQXhCLEdBQUE7QUFF ZCxRQUFBLElBQUE7QUFBQSxJQUFBLElBQUEsR0FBTyxNQUFNLENBQUMsSUFBUCxD QUFZLGFBQVosQ0FBUCxDQUFBO0FBQ0EsSUFBQSxJQUFPLFlBQVA7QUFDSSxNQUFB LElBQUEsR0FBTyxDQUFDLENBQUMsUUFBRixDQUFZLGtCQUFBLEdBQWlCLENBQUMs TUFBTSxDQUFDLElBQVAsQ0FBQSxDQUFELENBQWpCLEdBQWdDLE9BQTVDLENBQVAs Q0FBQTtBQUFBLE1BQ0EsTUFBTSxDQUFDLElBQVAsQ0FBWSxhQUFaLEVBQTJCLElB QTNCLENBREEsQ0FESjtLQURBO1dBTUEsRUFBRSxDQUFDLEtBQUssQ0FBQyxpQkFB VCxDQUEyQixJQUFBLENBQUssR0FBTCxDQUFTLENBQUMsT0FBVixDQUFrQixNQUFs QixFQUEwQixHQUExQixDQUEzQixFQUEyRCxHQUEzRCxFQVJjO0VBQUEsQ0FkdEIs Q0FBQTs7QUFBQSxzQkF3QkEsOEJBQUEsR0FBZ0MsU0FBRSxNQUFGLEdBQUE7V0FB ZSxLQUFBLEdBQUssTUFBTCxHQUFZLEtBQTNCO0VBQUEsQ0F4QmhDLENBQUE7O21C QUFBOztHQUZ5RCxFQUFFLENBQUMsc0JBQWhFLENBdkJBLENBQUE7O0FBQUEsRUFv REUsQ0FBQyxpQkFBSCxHQUF1QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBMUIs Q0FBK0IsUUFBL0IsQ0FwRHZCLENBQUE7O0FBQUEsRUFxREUsQ0FBQyxpQkFBSCxH QUF1QixTQUFFLEVBQUYsRUFBTSxRQUFOLEdBQUE7U0FDbkIsU0FBUyxDQUFDLFNB QVUsQ0FBQSxFQUFBLENBQXBCLEdBQTBCLFNBRFA7QUFBQSxDQXJEdkIsQ0FBQTs7 QUFBQSxFQXVERSxDQUFDLElBQUgsR0FBVSxFQUFFLENBQUMsVUFBSCxDQUFBLENB dkRWLENBQUE7O0FBQUEsT0EwREEsR0FBVSxNQUFNLENBQUMsTUExRGpCLENBQUE7 O0FBQUEsTUEyRE0sQ0FBQyxNQUFQLEdBQWdCLFNBQUEsR0FBQTs7SUFDWjtHQUFB O0FBQUEsRUFFQSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQWQsQ0FBMEIsUUFBUSxD QUFDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQTFCLENBRkEsQ0FBQTtBQUFBLEVBR0Es UUFBUSxDQUFDLElBQUksQ0FBQyxXQUFkLENBQTBCLFFBQVEsQ0FBQyxhQUFULENB QXVCLE9BQXZCLENBQTFCLENBSEEsQ0FBQTtBQUFBLEVBS0EsRUFBRSxDQUFDLGlC QUFILENBQXFCO0FBQUEsSUFBQSxLQUFBLEVBQU8sU0FBRSxHQUFGLEdBQUE7YUFB VyxFQUFFLENBQUMsSUFBSCxDQUFBLEVBQVg7SUFBQSxDQUFQO0dBQXJCLENBTEEs Q0FBQTtTQU9BLEVBQUUsQ0FBQyxhQUFILENBQWlCLEVBQWpCLEVBQXNCLFFBQVEs Q0FBQyxJQUEvQixFQVJZO0FBQUEsQ0EzRGhCLENBQUE7O0FBQUEsTUFzRU0sQ0FB QyxPQUFQLEdBQWlCLEVBdEVqQixDQUFBIgp9

