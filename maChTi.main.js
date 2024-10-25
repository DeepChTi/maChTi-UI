class MacButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // 创建样式
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 47px;
                max-width: 100vw;
                height: var(--button-height, 22px);
                border-radius: 5px;
                box-shadow: 0 0 3px 0 rgba(255, 255, 255, 0.12),
                            0 1px 2px 0 rgba(255, 255, 255, 0.12),
                            0 0 1px 0 rgba(255, 255, 255, 0.24);
                background-image: linear-gradient(179deg, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.00) 96%),
                                  linear-gradient(to bottom right, #2277ff, #0c61ff);
                background-size: 100% 100%;
                font-size: var(--button-font-size, 11px);
                color: #fff;
                padding: 2px 5px;
                user-select: none;
                cursor: pointer; /* 改为 pointer */
                width: var(--button-width, auto);
            }
            :host(:active) {
                background-image: linear-gradient(to bottom right, #0c61ff, #2277ff),
                                  linear-gradient(179deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.17) 96%);
                user-select: none;
            }
        `;

        // 设置可选属性
        const width = this.getAttribute('width') || 'auto';
        const height = this.getAttribute('height') || '22px';
        const fontSize = this.getAttribute('font-size') || '11px';
        const id = this.getAttribute('id') || '';
        const className = this.getAttribute('class') || '';
        const onCheck = this.getAttribute('onCheck');

        // 设置 CSS 变量
        this.style.setProperty('--button-width', width);
        this.style.setProperty('--button-height', height);
        this.style.setProperty('--button-font-size', fontSize);

        // 创建内容容器
        const container = document.createElement('div');
        container.innerHTML = this.innerHTML;
        container.id = id;
        container.className = className;

        // 添加点击事件处理
        if (onCheck) {
            container.addEventListener('click', () => {
                // 调用 onCheck 方法
                const onCheckFunction = new Function('event', onCheck);
                onCheckFunction.call(this, event);
            });
        }

        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

class MacWhiteButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // 创建样式
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 47px;
                max-width: 100vw;
                height: var(--button-height, 22px);
                border-radius: 5px;
                box-shadow: 0 0 3px 0 rgba(255, 255, 255, 0.12),
                            0 1px 2px 0 rgba(255, 255, 255, 0.12),
                            0 0 1px 0 rgba(255, 255, 255, 0.24);
                background-image: linear-gradient(179deg, rgba(255, 255, 255, 0.17) 0%, rgba(255, 255, 255, 0.00) 96%),
                                  linear-gradient(to bottom right, #D7D7D7, #B5B5B5);
                background-size: 100% 100%;
                font-size: var(--button-font-size, 11px);
                color: #fff;
                padding: 2px 5px;
                user-select: none;
                cursor: pointer; /* 改为 pointer */
                width: var(--button-width, auto);
            }
            :host(:active) {
                background-image: linear-gradient(to bottom right, #B5B5B5, #D7D7D7),
                                  linear-gradient(179deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.17) 96%);
                user-select: none;
            }
        `;

        // 设置可选属性
        const width = this.getAttribute('width') || 'auto';
        const height = this.getAttribute('height') || '22px';
        const fontSize = this.getAttribute('font-size') || '11px';
        const id = this.getAttribute('id') || '';
        const className = this.getAttribute('class') || '';
        const onCheck = this.getAttribute('onCheck');

        // 设置 CSS 变量
        this.style.setProperty('--button-width', width);
        this.style.setProperty('--button-height', height);
        this.style.setProperty('--button-font-size', fontSize);

        // 创建内容容器
        const container = document.createElement('span');
        container.innerHTML = this.innerHTML;
        container.id = id;
        container.className = className;

        // 添加点击事件处理
        if (onCheck) {
            container.addEventListener('click', (event) => {
                // 调用 onCheck 方法
                const onCheckFunction = new Function('event', onCheck);
                onCheckFunction.call(this, event);
            });
        }

        shadow.appendChild(style);
        shadow.appendChild(container);
    }
}

class MacLogos extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // 创建样式
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: inline-block;
                width: 70px; /* 根据需要调整图标的大小 */
                height: 70px;
                background-size: contain;
                background-repeat: no-repeat;
                visibility: hidden; /* 初始隐藏 */
            }
            img {
                width: 100%;
                height: 100%;
            }
        `;

        // 创建图标容器
        const img = document.createElement('img');
        const logosName = this.innerHTML.trim(); // 获取图标名称
        const logosPath = `logos/${logosName}.png`; // 修正变量名

        img.src = logosPath;

        img.onload = () => {
            this.style.visibility = 'visible'; // 图标加载完成后显示
        };

        img.onerror = () => {
            console.error(`图标未找到: ${logosPath}`); // 修正变量名
            this.style.visibility = 'hidden'; // 如果图标未找到，保持隐藏
        };

        shadow.appendChild(style);
        shadow.appendChild(img);
    }
}

class MacIcon extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // 创建样式
        const style = document.createElement('style');
        style.textContent = `
            :host {
                display: inline-block;
                width: 24px; /* 根据需要调整图标的大小 */
                height: 24px;
                background-size: contain;
                background-repeat: no-repeat;
                visibility: hidden; /* 初始隐藏 */
            }
            img {
                width: 100%;
                height: 100%;
            }
        `;

        
        const img = document.createElement('img');
        const iconName = this.innerHTML.trim();
        const iconPath = `icon/${iconName}.png`;

        img.src = iconPath;

        img.onload = () => {
            this.style.visibility = 'visible'; 
        };

        img.onerror = () => {
            console.error(`图标未找到: ${iconPath}`);
            this.style.visibility = 'hidden'; 
        };

        shadow.appendChild(style);
        shadow.appendChild(img);
    }
}

class MacDialog extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const attrs = this.getAttribute('data');
        const [title, subtitle] = attrs.split(';').map(item => item.trim());
        const icon = this.getAttribute('icon'); 
        const onConfirm = this.getAttribute('confirm');
        const onCancel = this.getAttribute('cancel');
        const triggerId = this.getAttribute('trigger');

        const style = document.createElement('style');
        style.textContent = `
            .ask-module {
                backdrop-filter: blur(10px);
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #EEEEEE90;
                border: 1px solid #d3d3d3; 
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                display: none; 
            }
            .modal-content {
                text-align: center;
                color: black;
                line-height: 5px;
            }
            .button-container {
                display: flex;
                justify-content: space-between;
                margin-top: 20px;
                gap: 15px; 
            }
        `;

        const modal = document.createElement('div');
        modal.className = 'ask-module';

        modal.innerHTML = `
            <div class="modal-content">
                <mac-logos>${icon}</mac-logos>
                <h4>${title}</h4>
                <p>${subtitle}</p>
                <div class="button-container">
                    <mac-white-button width="100px" height="25px" font-size="16px" class="cancel">取消</mac-white-button>
                    <mac-button width="100px" height="25px" font-size="16px" class="enter">确定</mac-button>
                </div>
            </div>
        `;

        modal.querySelector('.enter').onclick = () => {
            if (onConfirm) eval(onConfirm);
            modal.style.display = 'none';
        };

        modal.querySelector('.cancel').onclick = () => {
            if (onCancel) eval(onCancel);
            modal.style.display = 'none';
        };

        shadow.appendChild(style);
        shadow.appendChild(modal);

        const triggerElement = document.getElementById(triggerId);
        if (triggerElement) {
            triggerElement.onclick = () => {
                modal.style.display = 'block';
            };
        }
    }
}
customElements.define('mac-dialog', MacDialog);
customElements.define('mac-icon', MacIcon);
customElements.define('mac-logos', MacLogos);
customElements.define('mac-button', MacButton);
customElements.define('mac-white-button', MacWhiteButton);
