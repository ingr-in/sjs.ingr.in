function html() {

  const isNode = (v) =>
  v instanceof Node;

  const state = {
    dce: (tag) => document.createElement(tag),
    qs: (s) => document.querySelector(s),
    qsa: (s) => document.querySelectorAll(s),
    store: new Map(),
    events: new WeakMap()
  };

  const app = {

    createTagHandler(tag) {

      const create = (...args) => {

        const element = state.dce(tag);

        const attrs = {};
        const children = [];

        // PARSE ARGS
        args.forEach(arg => {

          if (
            arg === null ||
            arg === undefined
          ) return;

          // ARRAY
          if (Array.isArray(arg)) {

            children.push(...arg);

            return;
          }

          // NODE
          if (isNode(arg)) {

            children.push(arg);

            return;
          }

          // ATTRIBUTE OBJECT
          if (
            typeof arg === 'object'
          ) {

            Object.assign(attrs, arg);

            return;
          }

          // STRING / NUMBER
          children.push(arg);

        });

        // ATTRIBUTES
        Object.entries(attrs).forEach(([key, value]) => {

          if (
            value === null ||
            value === undefined
          ) return;

          // CLASS
          if (
            key === 'class'
          ) {

            element.className = value;

            return;
          }

          // ID
          if (
            key === 'id'
          ) {

            element.id = value;

            return;
          }

          // EVENTS
          if (key === 'events') {

            Object.entries(value).forEach(([event, fn]) => {

              element.addEventListener(
                event,
                fn
              );

            });

            return;
          }

          // STYLE
          if (key === 'style') {

            if (
              typeof value === 'object'
            ) {

              Object.assign(
                element.style,
                value
              );

            } else {

              element.style.cssText =
              value;

            }

            return;
          }

          // DATASET
          if (key === 'dataset') {

            Object.entries(value).forEach(([k, v]) => {

              element.dataset[k] = v;

            });

            return;
          }

          // BOOLEAN
          if (
            [
              'checked',
              'selected',
              'disabled',
              'readonly',
              'required',
              'multiple'
            ].includes(key)
          ) {

            element[key] = !!value;

            return;
          }

          // .data-id
          if (key.startsWith('.')) {

            element.setAttribute(
              key.slice(1),
              value
            );

            return;
          }

          // DEFAULT
          element.setAttribute(
            key,
            value
          );

        });

        // CHILDREN
        children.forEach(child => {

          if (
            typeof child === 'string' ||
            typeof child === 'number'
          ) {

            element.appendChild(
              document.createTextNode(child)
            );

          } else if (isNode(child)) {

            element.appendChild(child);

          }

        });

        return element;
      };

      return create;
    },

    // STATE
    setState(key,
      value) {

      state.store.set(key,
        value);

      return app;
    },

    getState(key) {

      return state.store.get(key);
    },

    useState(initial) {

      let value = initial;

      const listeners = new Set();

      const setValue = (newValue) => {

        value = newValue;

        listeners.forEach(fn =>
          fn(value)
        );
      };

      const subscribe = (fn) => {

        listeners.add(fn);

        fn(value);

        return () =>
        listeners.delete(fn);
      };

      return {
        value: () => value,
        setValue,
        subscribe
      };
    },

    // DOM
    append(parent,
      ...children) {

      children.forEach(child => {

        if (
          typeof child === 'string' ||
          typeof child === 'number'
        ) {

          parent.appendChild(
            document.createTextNode(child)
          );

        } else if (isNode(child)) {

          parent.appendChild(child);

        }

      });

      return parent;
    },

    prepend(parent,
      ...children) {

      [...children]
      .reverse()
      .forEach(child => {

        if (
          typeof child === 'string' ||
          typeof child === 'number'
        ) {

          parent.prepend(
            document.createTextNode(child)
          );

        } else if (isNode(child)) {

          parent.prepend(child);

        }

      });

      return parent;
    },

    remove(element) {

      if (
        element &&
        element.parentNode
      ) {

        element.parentNode.removeChild(
          element
        );

      }

      return app;
    },

    empty(element) {

      element.textContent = '';

      return element;
    },

    // QUERY
    find: (s) => state.qs(s),

    findAll: (s) => state.qsa(s),

    findById(id) {

      return document.getElementById(id);
    },

    findByClass(cls) {

      return document.getElementsByClassName(cls);
    },

    findByTag(tag) {

      return document.getElementsByTagName(tag);
    },

    // EVENTS
    on(
      element,
      event,
      handler,
      options = {}
    ) {

      element.addEventListener(
        event,
        handler,
        options
      );

      if (!state.events.has(element)) {

        state.events.set(element, []);

      }

      state.events
      .get(element)
      .push({
        event,
        handler
      });

      return app;
    },

    off(
      element,
      event,
      handler
    ) {

      if (handler) {

        element.removeEventListener(
          event,
          handler
        );

      } else {

        const list =
        state.events.get(element) || [];

        list.forEach(e => {

          if (e.event === event) {

            element.removeEventListener(
              e.event,
              e.handler
            );

          }

        });

      }

      return app;
    },

    // READY
    run(callback) {

      if (
        document.readyState ===
        'loading'
      ) {

        document.addEventListener(
          'DOMContentLoaded',
          callback
        );

      } else {

        callback();

      }

      return app;
    },

    // LOAD JS
    js(src, options = {}) {

      const script =
      document.createElement(
        'script'
      );

      script.src = src;

      Object.assign(
        script,
        options
      );

      document.head.appendChild(
        script
      );

      return script;
    },

    // LOAD CSS
    css(href, options = {}) {

      const link =
      document.createElement(
        'link'
      );

      link.rel = 'stylesheet';

      link.href = href;

      Object.assign(
        link,
        options
      );

      document.head.appendChild(
        link
      );

      return link;
    },

    loaded() {

      return (
        document.readyState !==
        'loading'
      );
    },

    // FETCH
    request: async (
      url,
      options = {}
    ) => {

      const res = await fetch(
        url,
        options
      );

      if (!res.ok) {

        throw new Error(
          `HTTP ${res.status}`
        );

      }

      return res;
    },

    // TEMPLATE
    render(
      template,
      data = {}
    ) {

      return template.replace(
        /\{\{(\w+)\}\}/g,
        (_, key) =>
        data[key] ?? ''
      );
    },

    // STYLE HELPER
    style(styles) {

      return styles;
    },

    // FRAGMENT
    fragment(...children) {

      const frag =
      document.createDocumentFragment();

      children.forEach(child => {

        if (
          typeof child === 'string' ||
          typeof child === 'number'
        ) {

          frag.appendChild(
            document.createTextNode(child)
          );

        } else if (isNode(child)) {

          frag.appendChild(child);

        }

      });

      return frag;
    }

  };

  // TAGS
  const tags = [
    'div',
    'span',
    'p',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'a',
    'img',
    'button',
    'input',
    'form',
    'ul',
    'ol',
    'li',
    'section',
    'article',
    'header',
    'footer',
    'nav',
    'main',
    'aside',
    'label',
    'select',
    'option',
    'textarea',
    'table',
    'tr',
    'td',
    'th'
  ];

  tags.forEach(tag => {

    app[tag] =
    app.createTagHandler(tag);

  });

  // INPUT SHORTCUTS
  [
    'text',
    'password',
    'email',
    'number',
    'checkbox',
    'radio',
    'file',
    'date',
    'color',
    'range'
  ].forEach(type => {

      app.input[type] = (...args) => {

        return app.input(
          {
            type
          },
          ...args
        );

      };

    });

  return app;
}

const mekk = html();

const $ = mekk;

export default mekk;
